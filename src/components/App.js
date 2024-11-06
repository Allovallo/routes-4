// import { Route, Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          GoMerch Store
        </p>
        <nav>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Product</NavLink>
        </nav>
      </header>
    </div>
  );
};
