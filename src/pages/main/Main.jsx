import { useContext, useEffect } from "react";
import { UserContext } from "../../components/context/UserContext";
import { useNavigate } from 'react-router-dom'


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
      {userData.user_id}<br/>
      {userData.username}<br/>
      {userData.first_name}<br/>
      {userData.last_name}<br/>
      {userData.avatar}
    </div>
  )
}

export default Main