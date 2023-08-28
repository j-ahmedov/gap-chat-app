import { useContext, useEffect } from "react";
import { UserContext } from "../../components/context/UserContext";
import { useNavigate } from 'react-router-dom'
import Post from "../../components/post/Post";
import './Main.css'

const Main = () => {

  const {userData} = useContext(UserContext);
  const tokenItem = localStorage.getItem('authToken');
  const navigate = useNavigate()

  useEffect(() => {
    if (!tokenItem) {
      navigate('/')
    }
  })

  return (
    <div>
      <div className="post-list-container"> 
        <Post />
      </div>
    </div>
  )
}

export default Main