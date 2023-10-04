import { format } from "date-fns";
import Avatar from "../avatar/Avatar";
import "./Post.css";


const Post = ({post}) => {

  const date = new Date(post.published_at)
  const formattedDate = format(date, 'dd MMM, yyyy', {timezone: 'UTC'})

  return (
    <div className="post-container">
      <div className="config-container">
        <div className="user-info">
          <Avatar img_source={post.user.avatar} />
          {post.user.username}
        </div>
        <div>
          <i className="fa-solid fa-ellipsis fa-xl"></i>
        </div>
      </div>
      <hr style={{ width: "95%", height: "0.1px", margin: "0 auto" }} />
      <div className="post-content-container">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      <div className="post-image-container">
        <img
          src={post.post_image}
          alt="post img"
        />
      </div>
      <div className="post-icons-container">
        <div style={{ display: "flex", gap: "10px" }}>
          {post.user_liked ? <i class="fa-solid fa-heart fa-xl"></i> : <i className="fa-regular fa-heart fa-xl"></i>}
          <i className="fa-regular fa-comment fa-xl"></i>
          <i className="fa-regular fa-paper-plane fa-xl"></i>
        </div>
        <div>
          <i className="fa-regular fa-bookmark fa-xl"></i>
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
        <p>{post.likes_count} likes</p>
        <p>{post.comments_count} comments</p>
      </div>
      <div style={{padding: '5px 30px', display: 'flex', justifyContent: 'end'}}>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default Post;
