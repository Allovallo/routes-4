import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { ProductDetails } from '../pages/ProductDetails';
import { SharedLayout } from '../components/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />}></Route>
          <Route path="team" element={<Team />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Route>
    </Routes>
  );
};
