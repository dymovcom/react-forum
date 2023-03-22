import { ReducerList } from "app/providers/StoreProvider/config/StateSchema";
import { profileReducer } from "entities/Profile";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const { t } = useTranslation("profile");
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>{t("text")}</div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
