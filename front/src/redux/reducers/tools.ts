import { toolsActions, toolsActionsType, toolsState } from '../types/toolsReduxType';

const initialState: toolsState = {
  tools: [],
  isLoader: false,
};

export const tools = (state = initialState, action: toolsActions): toolsState => {
  switch (action.type) {
    case toolsActionsType.SET_TOOLS_LOADER:
      return {
        ...state,
        isLoader: action.payload,
      };
    case toolsActionsType.SET_TOOLS_ITEM:
      return {
        ...state,
        tools: action.payload,
      };
    default:
      return state;
  }
};
