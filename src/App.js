import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome/Welcome';
import Register from './pages/signup/SignUp';
import Main from './pages/main/Main';
import WithNavbar from './components/WithNavbar';
import { useState } from 'react';
import axios from 'axios';
import { requestParams } from "./constants/request_params";
import { UserContext } from './components/context/UserContext';
import PostAdd from './pages/post-add/PostAdd';

function App() {

  const [userData, setUserData] = useState({})

  const refreshUserData = () => {

    const headers = {
      'Authorization': `Token ${localStorage.getItem('authToken')}`,
    }

    axios.get(`${requestParams.url_template}/parse-token/`, {headers})
    .then(response => {
      setUserData(response.data)
    })
    .catch(error => {
      console.log(error.response)
      setUserData({})
    })
  }

  return (
    <div className="App">
      <UserContext.Provider value={{userData, refreshUserData}}>
      <Router>
        <Routes>    
          <Route path='/' element={<Welcome />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/home' element={WithNavbar(Main)} />
          <Route path='/post-add' element={WithNavbar(PostAdd)} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
