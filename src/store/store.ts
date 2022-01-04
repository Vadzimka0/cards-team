import { combineReducers, createStore, Store } from 'redux';

import { auth, login } from 'store/reducers';

const reducers = combineReducers({
  auth,
  login,
});

export type AppStoreType = ReturnType<typeof reducers>;

export const store: Store<AppStoreType> = createStore(reducers);

// @ts-ignore
window.store = store; // for dev
