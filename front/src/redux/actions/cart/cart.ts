import { cartActions, cartActionsType } from '../../types/cartReduxType';

export const addToolToCart = (toolObj: any): cartActions => {
  return { type: cartActionsType.ADD_TOOL_CART, payload: toolObj };
};

export const clearCart = (): cartActions => {
  return { type: cartActionsType.CLEAR_CART };
};

export const removeCartItem = (payload: number): cartActions => {
  return { type: cartActionsType.REMOVE_CART_ITEM, payload };
};

export const plusCartItem = (payload: number): cartActions => {
  return { type: cartActionsType.PLUS_CART_ITEM, payload };
};

export const minusCartItem = (payload: number): cartActions => {
  return { type: cartActionsType.MINUS_CART_ITEM, payload };
};
