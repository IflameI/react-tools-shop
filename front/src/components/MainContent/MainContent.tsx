import { useEffect } from 'react';
import { MainContentItems } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const MainContent: React.FC = () => {
  const { fetchToolsItems } = useActions();
  const { tools, isLoader } = useTypedSelector((state) => state.tools);

  const onClickAddToolToCart = (obj: any) => {};

  useEffect(() => {
    fetchToolsItems();
  }, []);

  return <MainContentItems tools={tools} isLoader={isLoader} />;
};

export default MainContent;
