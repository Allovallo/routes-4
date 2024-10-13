import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { SharedLayout } from './SharedLayout';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { ProductDetails } from '../pages/ProductDetails';

function App() {
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
}

export default App;
