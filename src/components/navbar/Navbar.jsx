import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../search-bar/SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/gap-logo.png"}
          alt="Logo"
          style={{ width: "120px" }}
          color="rgb(61, 61, 61)"
        />
      </div>
      <SearchBar />
      <div className="navbar-links-container">
        <Link to="/home">
          <i className="fa-solid fa-house fa-xl"></i>
        </Link>
        <Link to="/add">
          <i className="fa-regular fa-square-plus fa-xl"></i>
        </Link>
        <Link to="/profile">
          <i className="fa-regular fa-circle-user fa-xl"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
