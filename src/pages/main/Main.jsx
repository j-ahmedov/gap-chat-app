import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/UserContext";
import { useNavigate } from "react-router-dom";
import Post from "../../components/post/Post";
import "./Main.css";
import { requestParams } from "../../constants/request_params";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const Main = () => {
  const { refreshUserData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const tokenItem = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenItem) {
      navigate("/");
    }
    refreshUserData();
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get(`${requestParams.api_template}/post/list/`)
      .then((response) => {
        setIsLoading(false)
        setPostList(response.data);
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error.response);
      });
  };

  return (
    <div>
      {isLoading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <div className="post-list-container">
            {postList.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </div>
        )}
    </div>
  );
};

export default Main;
