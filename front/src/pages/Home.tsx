import { MainContent } from '../components';

const Home: React.FC = () => {
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'></div>
        <h2 className='content__title'>Все инструменты</h2>
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
