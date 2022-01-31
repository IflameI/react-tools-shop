/* eslint-disable import/no-anonymous-default-export */
import * as toolsActionCreators from './tools/tools';
import * as cartActionCreators from './cart/cart';

export default {
  ...toolsActionCreators,
  ...cartActionCreators,
};
