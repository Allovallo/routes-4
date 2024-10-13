import { Link, Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <main>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor repudiandae ullam nihil qui
        blanditiis sed quaerat, voluptatem distinctio atque tenetur quam. Velit sint numquam ex
        libero reprehenderit commodi ducimus ipsam. Molestiae minima iure deleniti recusandae dolore
        nulla iste enim. Accusantium, fugit! Incidunt est alias nam, animi nostrum, eligendi minima
        sed saepe magnam non quidem ratione. Tempore error minima hic facere? Illo alias officiis
        repellendus sed, repudiandae libero assumenda laboriosam exercitationem ea impedit, facilis
        dolorem. Culpa quisquam, aliquam nesciunt recusandae deleniti corporis. Sapiente eveniet
        eligendi laudantium omnis recusandae nam quaerat consequatur.
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
