import { useParams, useLocation } from 'react-router-dom';
import { getProductById } from '../fakeAPI';
import { BackLink } from '../components/BackLink';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const backLinkHref = useLocation().state?.from ?? '/products';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to product</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product: {product.name} (id: {id})
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil alias aliquam beatae
          dolorem magni recusandae maiores fugiat laborum fugit dolores officiis at ea eaque fuga
          officia vel, eius reprehenderit. Perferendis sint distinctio soluta veniam. Voluptate ab
          facere beatae perferendis voluptatum deserunt veritatis, doloribus perspiciatis suscipit
          ratione recusandae. Quisquam, quae fugit? Ipsa explicabo repudiandae vitae, nesciunt
          exercitationem doloribus earum sunt.
        </p>
      </div>
    </main>
  );
};
