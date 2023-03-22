import { FC } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import classes from "./PageLoader.module.scss";

export const PageLoader: FC = () => (
  <div className={classes["page-loader"]}>
    <Loader />
  </div>
);
