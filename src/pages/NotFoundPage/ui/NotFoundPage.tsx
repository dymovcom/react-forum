import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
  const { t } = useTranslation("notFound");

  return (
    <div className={classes.NotFoundPage}>
      {t("page_not_found")}
    </div>
  );
};
