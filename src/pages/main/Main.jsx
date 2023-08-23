import axios from "axios";
import { requestParams } from "../../constants/request_params";
import { useEffect, useState } from "react";

const Main = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    const headers = {
      'Authorization': `Token ${localStorage.getItem('authToken')}`
    }

    axios.get(`${requestParams.url_template}/parse-token/`, {headers})
    .then(response => {
      setUserData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

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