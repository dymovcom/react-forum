const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");

const DB_PATH = path.resolve(__dirname, "db.json");
const PORT = 5000;
const SERVER_DELAY = 500;

const server = jsonServer.create();
const router = jsonServer.router(DB_PATH);

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// eslint-disable-next-line consistent-return
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, SERVER_DELAY);
  });

  next();
});

server.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password is required!" });
  }

  const db = JSON.parse(fs.readFileSync(DB_PATH), "UTF-8");
  const { users } = db;

  if (!users) {
    return res.status(500).json({ message: "unexpected error" });
  }

  const userFromBb = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!userFromBb) {
    return res.status(403).json({ message: "user not found" });
  }

  return res.json(userFromBb);
});

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(router);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on ${PORT} port`);
});
