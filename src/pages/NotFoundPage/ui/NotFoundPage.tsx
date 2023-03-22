import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import classes from "./NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
  const { t } = useTranslation("notFound");

  return <div className={classes["not-found-page"]}>{t("page_not_found")}</div>;
};

export default memo(NotFoundPage);
