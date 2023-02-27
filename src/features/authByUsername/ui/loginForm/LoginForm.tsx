import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button";
import { TextField } from "shared/ui/textField";
import classes from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = ({ value }: { value: string | null }) => {
    setUsername(value);
  };

  const passwordChangeHandler = ({ value }: { value: string | null }) => {
    setPassword(value);
  };

  return (
    <div className={classes.form}>
      <TextField
        label={t("username_field_label")}
        autoFocus
        value={username}
        onChange={usernameChangeHandler}
      />
      <TextField
        type="password"
        label={t("password_field_label")}
        value={password}
        onChange={passwordChangeHandler}
      />
      <Button>{t("login_form_submit")}</Button>
    </div>
  );
};
