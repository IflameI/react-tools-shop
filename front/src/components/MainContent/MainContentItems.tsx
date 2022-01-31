import { ContentBlock } from '..';
import { toolItemType } from '../../redux/types/toolsReduxType';

interface IMainContentItems {
  tools: toolItemType[];
  isLoader: boolean;
}

const MainContentItems: React.FC<IMainContentItems> = (props) => {
  return <div className='content__items'></div>;
};

export default MainContentItems;
