import axios from 'axios';

import { Dispatch } from 'redux';
import { toolItemType, toolsActions, toolsActionsType } from '../../types/toolsReduxType';

export const fetchToolsItems = () => {
  return async (dispatch: Dispatch<toolsActions>) => {
    try {
      dispatch({ type: toolsActionsType.SET_TOOLS_LOADER, payload: true });
      const response = await axios.get<toolItemType[]>('tools');
      dispatch({
        type: toolsActionsType.SET_TOOLS_ITEM,
        payload: response.data,
      });
      dispatch({ type: toolsActionsType.SET_TOOLS_LOADER, payload: false });
      return response;
    } catch (e) {
      console.warn('Произошла ошибка при получении инструментов ' + e);
    }
  };
};
