import { ReducersList } from "app/providers/StoreProvider/config/StateSchema";
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { FC, memo, useEffect } from "react";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
