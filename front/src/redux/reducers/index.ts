import { tools } from './tools';
import { cart } from './cart';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  tools,
  cart,
});

export type RootState = ReturnType<typeof rootReducer>;
