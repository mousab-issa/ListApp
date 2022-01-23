import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';

import globalReducers from './reducers';

const middlewares = [thunk];

const store: Store = createStore(
  globalReducers,
  {},
  applyMiddleware(...middlewares),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
