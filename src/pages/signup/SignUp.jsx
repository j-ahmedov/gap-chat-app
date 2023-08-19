import "../../assets/styles/form.css";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="form-container">
      <img
        src={process.env.PUBLIC_URL + "/images/gap-logo.png"}
        alt="Logo"
        style={{ width: "250px" }}
      />
      <div className="signup-element">
        <p>Sign Up to join an awesome community</p>
      </div>
      <div className="form-input-container">
        <div>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <button className="form-btn">Sign Up</button>
      <div className="form-extra-box">
        <p>Already have an account?</p>
        <a href="/">Log In</a>
      </div>
    </div>
  );
};

export default SignUp;
