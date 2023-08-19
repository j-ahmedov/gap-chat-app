import "./Welcome.css";
import "../../assets/styles/form.css";

const Welcome = () => {
  return (
    <div className="form-container">
      <img
        src={process.env.PUBLIC_URL + "/images/gap-logo.png"}
        alt="Logo"
        style={{ width: "250px" }}
      />
      <div className="form-input-container">
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <button className="form-btn">Log In</button>
      <div className="login-element">
        <a href="/">Forgot Password?</a>
      </div>
      <div className="form-extra-box">
        <p>Don't have an account?</p>
        <a href="/sign-up">Sign Up</a>
      </div>
    </div>
  );
};

export default Welcome;
