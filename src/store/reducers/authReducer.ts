import { authAPI, LoginData, RegistrationData, UsersInfoResponse } from 'api/authApi';
import { AppDispatch } from 'store/store';

const initState = {
  isRegisterSuccess: false,
  isLoggedIn: false,
  userInfo: null,
};

export const authReducer = (
  state: InitStateType = initState,
  action: ActionsTypes,
): InitStateType => {
  switch (action.type) {
    case 'AUTH/SET_REGISTER_SUCCESS':
    case 'AUTH/SET_USER_INFO':
    case 'AUTH/SET_IS_LOGGED_IN':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// action creators
export const setRegistrationSuccess = (isRegisterSuccess: boolean) =>
  ({
    type: 'AUTH/SET_REGISTER_SUCCESS',
    payload: { isRegisterSuccess },
  } as const);

export const setUsersInfo = (userInfo: UsersInfoResponse) =>
  ({
    type: 'AUTH/SET_USER_INFO',
    payload: { userInfo },
  } as const);

export const setIsLoggedIn = (isLoggedIn: boolean) =>
  ({
    type: 'AUTH/SET_IS_LOGGED_IN',
    payload: { isLoggedIn },
  } as const);

// thunk creators
export const registration =
  (registrationsData: RegistrationData) => async (dispatch: AppDispatch) => {
    try {
      // dispatch(setAppIsLoading(true));
      await authAPI.registration(registrationsData);
      dispatch(setRegistrationSuccess(true));
      // dispatch(setAppInfo(`Successful! Now you can login!`));
    } catch (e) {
      // errorsHandler(e, dispatch);
    } finally {
      dispatch(setRegistrationSuccess(false));
      // dispatch(setAppIsLoading(false));
    }
  };

export const login = (loginData: LoginData) => async (dispatch: AppDispatch) => {
  try {
    // dispatch(setAppIsLoading(true));
    const response = await authAPI.login(loginData);
    dispatch(setUsersInfo(response.data));
    dispatch(setIsLoggedIn(true));
    // dispatch(setAppInfo(`Successful login, ${response.data.name}`));
  } catch (e) {
    // errorsHandler(e, dispatch);
  } finally {
    // dispatch(setAppIsLoading(false));
  }
};

// types
export type InitStateType = {
  isRegisterSuccess: boolean;
  isLoggedIn: boolean;
  userInfo: null | UsersInfoResponse;
};

type ActionsTypes =
  | ReturnType<typeof setRegistrationSuccess>
  | ReturnType<typeof setIsLoggedIn>
  | ReturnType<typeof setUsersInfo>;
