import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Donut shop</h1>
      </Link>
      <Link to="/donut/AddToCart">Show details</Link>
    </div>
  );
};

export default Header;
