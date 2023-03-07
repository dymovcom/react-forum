import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Button } from "shared/ui/button";
import { Text } from "shared/ui/text";
import { TextField } from "shared/ui/textField";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginActions } from "../../model/slice/loginSlice";
import classes from "./LoginForm.module.scss";

const LoginFormComponent: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const usernameChangeHandler = useCallback(
    ({ value }: { value: string }) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const passwordChangeHandler = useCallback(
    ({ value }: { value: string }) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const submitHandler = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classes.form}>
      <Text size="l" align="center">
        {t("login_form_title")}
      </Text>
      <TextField
        label={t("username_field_label")}
        required
        autoFocus
        value={username}
        onChange={usernameChangeHandler}
      />
      <TextField
        type="password"
        label={t("password_field_label")}
        required
        value={password}
        onChange={passwordChangeHandler}
      />
      {error && <Text variant="alert">{t(error)}</Text>}
      <Button onClick={submitHandler} loading={isLoading}>
        {t("login_form_submit")}
      </Button>
    </div>
  );
};

export const LoginForm = memo(LoginFormComponent);
