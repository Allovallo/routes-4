import { Link } from 'react-router-dom';
// import { Container, CardWrapper, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`${product.id}`}>
            <img src="https://via.placeholder.com/200x100" alt=""></img>
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
