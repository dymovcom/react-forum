import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import classes from "./PageError.module.scss";

export const PageError: FC = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classes["page-error"]}>
      <p>{t("page_error")}</p>
      <Button onClick={reloadPage}>{t("page_error_refresh_btn")}</Button>
    </div>
  );
};
