import { Link, Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <main>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit magnam eaque vel, tempore
        quibusdam totam nisi qui id dolore deleniti libero natus consequatur doloremque ratione
        cupiditate earum laboriosam impedit quis! Maxime rerum voluptas ipsam nisi fugit beatae
        voluptatum, consequatur eos commodi omnis laboriosam ab iusto accusantium, id dolore dolorem
        tenetur aliquid, libero provident! Voluptatum mollitia eaque optio error blanditiis
        molestiae.
      </p>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know about the team</Link>
        </li>
        <li>
          <Link to="reviews">Go thru the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
