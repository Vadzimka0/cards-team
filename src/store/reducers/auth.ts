const initState = {
  isAuth: false,
};
export type AuthStateType = typeof initState;

export const auth = (
  state: AuthStateType = initState,
  action: ActionsTypes,
): AuthStateType => {
  switch (action.type) {
    case 'IS_AUTH': {
      return state;
    }
    default:
      return state;
  }
};

type ActionsTypes = ReturnType<typeof authAC>;

export const authAC = (isAuth: boolean) =>
  ({
    type: 'IS_AUTH',
    isAuth,
  } as const);
