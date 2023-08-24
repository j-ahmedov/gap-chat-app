import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../search-bar/SearchBar";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { requestParams } from "../../constants/request_params";

const Navbar = () => {
  const { userData } = useContext(UserContext);

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
        <div className="user-container">
          {userData.avatar ? (
            <div className="image-container">
              <img
                src={`${requestParams.url_template}${userData.avatar}`}
                alt="user avatar"              
              />
            </div>
          ) : (
            <Link to="/profile">
              <i className="fa-regular fa-circle-user fa-xl"></i>
            </Link>
          )}
          {userData.username}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
