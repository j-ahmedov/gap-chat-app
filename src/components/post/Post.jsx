import { useContext } from "react";
import Avatar from "../avatar/Avatar";
import { UserContext } from "../context/UserContext";
import { requestParams } from "../../constants/request_params";
import "./Post.css";

const Post = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="post-container">
      <div className="config-container">
        <Avatar
          img_source={userData.avatar}
        />
        <i class="fa-solid fa-ellipsis fa-xl"></i>
      </div>
      <div className="image-container"></div>
    </div>
  );
};

export default Post;
