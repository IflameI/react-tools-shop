import { cartActions, cartActionsType, cartState } from '../types/cartReduxType';

const initialState: cartState = {
  items: [],
  isLoader: false,
};

export const cart = (state = initialState, action: cartActions): cartState => {
  switch (action.type) {
    default:
      return state;
  }
};
