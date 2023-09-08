import "./PostAdd.css";
import "../../assets/styles/form.css";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/context/UserContext";

function PostAdd() {

  const { refreshUserData } = useContext(UserContext);
  const tokenItem = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenItem) {
      navigate("/");
    }
    refreshUserData();
  }, []);

  return (
    <form>
      <div className="form-container">
        <h1>Add Post</h1>
        <div className="form-input-container">
          <div>
            <input style={{ width: "70%" }} type="text" placeholder="Title" />
          </div>
          <div>
            <textarea placeholder="Enter your text here..." rows={10} />
          </div>
          <div className="file-input">
            <input type="file" accept="image/*" />
          </div>
          <button className="form-btn">Add Post</button>
        </div>
      </div>
    </form>
  );
}

export default PostAdd;
