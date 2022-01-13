import { memo } from 'react';

interface ICategories {
  items: any;
  activeCategory: any;
  onClickCategory: any;
}

const Categories: React.FC<ICategories> = memo(function Categories({
  items,
  activeCategory,
  onClickCategory,
}) {
  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items.map((name: any, index: number) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
