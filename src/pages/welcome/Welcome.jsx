import "./Welcome.css";
import "../../assets/styles/form.css";
import { useState } from "react";
import { getToken } from "../../service/login";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handlePassworInput = (e) => {
    setPassword(e.target.value);
  };

  const handleData = (e) => {
    e.preventDefault();
    getToken(username, password)
      .then((response) => {
        if (response.request.status === 200) {
          localStorage.setItem('authToken', response.data.auth_token);
          navigate('/home')
        }
        console.log(response)
        
      })
      .catch((error) => console.log(error));
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleData}>
      <div className="form-container">
        <img
          src={process.env.PUBLIC_URL + "/images/gap-logo.png"}
          alt="Logo"
          style={{ width: "250px" }}
        />
        <div className="form-input-container">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameInput}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassworInput}
            />
          </div>
        </div>
        <button type="submit" className="form-btn">
          Log In
        </button>
        <div className="login-element">
          <a href="/">Forgot Password?</a>
        </div>
        <div className="form-extra-box">
          <p>Don't have an account?</p>
          <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    </form>
  );
};

export default Welcome;
