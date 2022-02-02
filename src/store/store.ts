import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer, authReducer } from './reducers';

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export const store: Store<AppStoreType> = createStore(
  reducers,
  applyMiddleware(thunkMiddleware),
);

export type AppStoreType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store; // for dev
