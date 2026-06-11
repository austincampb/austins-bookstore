import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { title, image } = category
  return (
    <Link className='directory-item-container' to={`/shop/${title.toLowerCase()}`}>
      <div 
        className='background-image'
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
}

export default DirectoryItem;