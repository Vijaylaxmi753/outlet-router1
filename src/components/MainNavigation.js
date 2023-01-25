import { Link } from "react-router-dom";

function MainNavigaion() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigaion;
