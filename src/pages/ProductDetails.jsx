import { useParams, useLocation } from "react-router-dom";
import { getProductById } from "../fakeAPI";
import { BackLink } from "../components/BackLink";

export const ProductDetails = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/products';

    return (
        <main>
            <BackLink to={backLinkHref}>Back to products</BackLink>
            <img src="https://via.placeholder.com/960x240" alt="" />
            <div>
                <h2>
                    Product - {product.name} - {id}
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi cumque saepe accusamus aliquid quas eligendi, cum, atque omnis, nihil ut dolorum quod corrupti aliquam provident consequuntur. Saepe, reprehenderit laborum?
                    Fugiat quis, esse quam labore quod consequatur odit id, non amet eius autem natus, quas quo. Est magni, id distinctio atque, ad necessitatibus veniam incidunt maiores vero eaque, sunt omnis!
                </p>
            </div>
        </main>
    )
}