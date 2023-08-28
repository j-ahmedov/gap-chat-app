import { useContext } from "react";
import Avatar from "../avatar/Avatar";
import { UserContext } from "../context/UserContext";
import "./Post.css";

const Post = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="post-container">
      <div className="config-container">
        <div className="user-info">
          <Avatar img_source={userData.avatar} />
          {userData.username}
        </div>
        <div>
          <i class="fa-solid fa-ellipsis fa-xl"></i>
        </div>
      </div>
      <hr style={{ width: "95%", height: "0.1px", margin: "0 auto" }} />
      <div className="post-content-container">
        <h3>Title</h3>
        <p>lorem ipsum dolor sit amet</p>
      </div>
      <div className="post-image-container">
        <img
          src={process.env.PUBLIC_URL + "/images/r8-min.jpg"}
          alt="post img"
        />
      </div>
      <div className="post-icons-container">
        <div style={{ display: "flex", gap: "10px" }}>
          <i class="fa-regular fa-heart fa-xl"></i>
          <i class="fa-regular fa-comment fa-xl"></i>
          <i class="fa-regular fa-paper-plane fa-xl"></i>
        </div>
        <div>
          <i class="fa-regular fa-bookmark fa-xl"></i>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          padding: "5px 30px",
          gap: "50px",
        }}
      >
        <p> likes</p>
        <p> comments</p>
      </div>
      <div style={{padding: '5px 30px', display: 'flex', justifyContent: 'end'}}>
        <p> 30 Aug, 2023</p>
      </div>
    </div>
  );
};

export default Post;
