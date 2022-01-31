export type toolItemType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export interface toolsState {
  tools: toolItemType[];
  isLoader: boolean;
}

export enum toolsActionsType {
  SET_TOOLS_ITEM = 'SET_TOOLS_ITEM',
  SET_TOOLS_LOADER = 'SET_TOOLS_LOADER',
}

interface setToolsType {
  type: toolsActionsType.SET_TOOLS_ITEM;
  payload: toolItemType[];
}

interface setToolsLoaderType {
  type: toolsActionsType.SET_TOOLS_LOADER;
  payload: boolean;
}

export type toolsActions = setToolsType | setToolsLoaderType;
