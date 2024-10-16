import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeAPI';
import { SearchBox } from '../components/SearchBox';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString}></SearchBox>
      <ProductList products={visibleProducts}></ProductList>
    </main>
  );
};
