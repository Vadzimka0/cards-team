import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { UsersInfoResponse } from 'api/authApi';
import { PATHS } from 'enums';
import { AppStoreType } from 'store/store';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
  const userInfo = useSelector<AppStoreType, null | UsersInfoResponse>(
    state => state.auth.userInfo,
  );
  const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn);

  if (!isLoggedIn) return <Navigate to={PATHS.LOGIN} />;

  return (
    <div>
      <div>Email: {userInfo && userInfo.email}</div>
      <div>Name: {userInfo && userInfo.name}</div>
    </div>
  );
};
