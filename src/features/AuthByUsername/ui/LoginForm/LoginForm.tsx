import { ReducerList } from "app/providers/StoreProvider/config/StateSchema";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { TextField } from "shared/ui/TextField";
import { getLoginUsername } from "../../model/selectors/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getIsLoading";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import classes from "./LoginForm.module.scss";

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginFormComponent: FC<LoginFormProps> = (props) => {
  const { onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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

  const submitHandler = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
};

export default memo(LoginFormComponent);
