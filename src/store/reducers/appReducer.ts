const initState = {
  isLoading: false,
  isInitialized: false,
  error: '',
  info: '',
};

export type InitStateType = typeof initState;

export const appReducer = (
  state: InitStateType = initState,
  action: ActionsTypes,
): InitStateType => {
  switch (action.type) {
    case 'APP/SET': {
      return state;
    }
    default:
      return state;
  }
};

export const authAC = (isAuth: boolean) =>
  ({
    type: 'APP/SET',
    isAuth,
  } as const);

type ActionsTypes = ReturnType<typeof authAC>;
