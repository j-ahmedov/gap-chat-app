import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../search-bar/SearchBar";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { requestParams } from "../../constants/request_params";
import Avatar from "../avatar/Avatar";

const Navbar = () => {
  const { userData } = useContext(UserContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  console.log(userData)

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
          <Avatar
            img_source={userData.avatar}
          />  
          {userData.username ? <p>{userData.username}</p> : <p>no</p> }
          <button onClick={logout}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
