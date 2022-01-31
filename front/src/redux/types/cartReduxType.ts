export interface cartState {}

export enum cartActionsType {
  ADD_TOOL_CART = 'ADD_TOOL_CART',
  CLEAR_CART = 'CLEAR_CART',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  PLUS_CART_ITEM = 'PLUS_CART_ITEM',
  MINUS_CART_ITEM = 'MINUS_CART_ITEM',
}

interface addToolToCartType {
  type: cartActionsType.ADD_TOOL_CART;
  payload: any;
}

interface clearCartType {
  type: cartActionsType.CLEAR_CART;
}

interface removeCartItemType {
  type: cartActionsType.REMOVE_CART_ITEM;
  payload: number;
}

interface plusCartItemType {
  type: cartActionsType.PLUS_CART_ITEM;
  payload: number;
}

interface minusCartItemType {
  type: cartActionsType.MINUS_CART_ITEM;
  payload: number;
}
export type cartActions =
  | addToolToCartType
  | clearCartType
  | removeCartItemType
  | plusCartItemType
  | minusCartItemType;
