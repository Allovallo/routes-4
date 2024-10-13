import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);

  return (
    <main>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product: {product.name}, id: {id}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis veritatis quae mollitia
          itaque enim illo voluptate molestiae vero possimus, cumque voluptatum voluptatibus labore
          fugiat illum ex consectetur earum, minus distinctio. Neque ullam, cumque inventore ut iure
          nam aperiam ex amet voluptatum minus, quia quasi laboriosam fugit. Alias accusamus tempora
          distinctio impedit soluta nobis rerum, ullam temporibus corporis quae consequatur error!
        </p>
      </div>
    </main>
  );
};