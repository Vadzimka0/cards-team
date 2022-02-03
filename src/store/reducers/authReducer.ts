import { authAPI, LoginData, RegistrationData, UsersInfoResponse } from 'api/authApi';
import { passwordRestoreMessage } from 'pages/authPages/passwordRecovery/passwordRestoreMessage';
import { AppDispatch } from 'store/store';

const initState = {
  isRegisterSuccess: false,
  isLoggedIn: false,
  userInfo: null,
  restoreEmail: '',
  isEmailSent: false,
};

export const authReducer = (
  state: InitStateType = initState,
  action: ActionsTypes,
): InitStateType => {
  switch (action.type) {
    case 'AUTH/SET_REGISTER_SUCCESS':
    case 'AUTH/SET_USER_INFO':
    case 'AUTH/SET_IS_LOGGED_IN':
    case 'auth/SET_RESTORE_EMAIL':
    case 'auth/SET_IS_EMAIL_SENT':
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
export const setRestoreEmail = (restoreEmail: string) =>
  ({
    type: 'auth/SET_RESTORE_EMAIL',
    payload: { restoreEmail },
  } as const);
export const setIsEmailSent = (isEmailSent: boolean) =>
  ({
    type: 'auth/SET_IS_EMAIL_SENT',
    payload: { isEmailSent },
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

export const restoreThroughEmail = (email: string) => async (dispatch: AppDispatch) => {
  try {
    await authAPI.passwordRestore(passwordRestoreMessage(email));
    dispatch(setIsEmailSent(true));
    dispatch(setRestoreEmail(email));
  } catch (e) {
    // dispatch(setError('Email not found!'));
  } finally {
    dispatch(setIsEmailSent(false));
    // dispatch(setIsLoading(false));
  }
};

// types
export type InitStateType = {
  isRegisterSuccess: boolean;
  isLoggedIn: boolean;
  userInfo: null | UsersInfoResponse;
  restoreEmail: string;
  isEmailSent: boolean;
};

type ActionsTypes =
  | ReturnType<typeof setRegistrationSuccess>
  | ReturnType<typeof setIsLoggedIn>
  | ReturnType<typeof setUsersInfo>
  | ReturnType<typeof setRestoreEmail>
  | ReturnType<typeof setIsEmailSent>;
