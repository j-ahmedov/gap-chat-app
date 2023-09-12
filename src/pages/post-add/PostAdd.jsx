import "./PostAdd.css";
import "../../assets/styles/form.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/context/UserContext";
import axios from "axios";
import { requestParams } from "../../constants/request_params";

function PostAdd() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");

  const { refreshUserData } = useContext(UserContext);
  const tokenItem = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubtitle = (e) => {
    setSubtitle(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAPI = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", subtitle);
    formData.append("post_image", image);
    console.log(formData);

    axios
      .post(`${requestParams.api_template}/post/create/`, formData, {
        headers: { Authorization: `Token ${tokenItem}` },
      })
      .then((res) => {
        console.log(res);
        navigate('/home')
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong')
      });
  };

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
            <input
              style={{ width: "70%" }}
              type="text"
              placeholder="Title"
              onChange={handleTitle}
              value={title}
            />
          </div>
          <div>
            <textarea
              placeholder="Enter your text here..."
              rows={10}
              onChange={handleSubtitle}
              value={subtitle}
            />
          </div>
          <div className="file-input">
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleImage}
            />
          </div>
          <button className="form-btn" onClick={handleAPI}>
            Add Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default PostAdd;
