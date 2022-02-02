import { authAPI, RegistrationData } from 'api/authApi';
import { AppDispatch } from 'store/store';

const initState = {
  isRegisterSuccess: false,
};

export type InitStateType = typeof initState;

export const authReducer = (
  state: InitStateType = initState,
  action: ActionsTypes,
): InitStateType => {
  switch (action.type) {
    case 'AUTH/SET_REGISTER_SUCCESS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setRegistrationSuccess = (isRegisterSuccess: boolean) =>
  ({
    type: 'AUTH/SET_REGISTER_SUCCESS',
    payload: { isRegisterSuccess },
  } as const);

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

type ActionsTypes = ReturnType<typeof setRegistrationSuccess>;
