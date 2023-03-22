import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { TextField } from "shared/ui/TextField";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError";
import { getProfileData } from "../../model/selectors/getProfileData";
import classes from "./ProfileCard.module.scss";

export const ProfileCard: FC = () => {
  const { t } = useTranslation("profile");

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <Text>{t("profile")}</Text>
        <Button className={classes["edit-btn"]} size="s" variant="ghost">
          {t("edit_btn")}
        </Button>
      </div>
      <div className={classes.data}>
        <TextField
          value={data?.firstname}
          label={t("firstname") as string}
          labelPosition="left"
          readOnly
          variant="clear"
          className={classes.input}
        />
        <TextField
          value={data?.lastname}
          label={t("lastname") as string}
          labelPosition="left"
          readOnly
          variant="clear"
          className={classes.input}
        />
      </div>
    </div>
  );
};
