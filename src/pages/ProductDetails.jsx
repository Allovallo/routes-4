import { useParams } from "react-router-dom";
import { getProductById } from "../fakeAPI";

export const ProductDetails = () => {
    const { id } = useParams();
    const product = getProductById(id);
    return (
        <main>
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