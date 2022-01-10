import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { auth, login } from 'store/reducers';

const reducers = combineReducers({
  auth,
  login,
});

export type AppStoreType = ReturnType<typeof reducers>;

export const store: Store<AppStoreType> = createStore(
  reducers,
  applyMiddleware(thunkMiddleware),
);

// @ts-ignore
window.store = store; // for dev
