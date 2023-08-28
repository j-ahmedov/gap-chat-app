import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome/Welcome';
import Register from './pages/signup/SignUp';
import Main from './pages/main/Main';
import WithNavbar from './components/WithNavbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { requestParams } from "./constants/request_params";
import { UserContext } from './components/context/UserContext';

function App() {

  const [userData, setUserData] = useState({})

  const refreshUserData = () => {

    const headers = {
      'Authorization': `Token ${localStorage.getItem('authToken')}`,
    }

    axios.get(`${requestParams.url_template}/parse-token/`, {headers})
    .then(response => {
      setUserData(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.response.data)
      setUserData({})
    })
  }

  useEffect(() => {
    refreshUserData()
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={{userData, refreshUserData}}>
      <Router>
        <Routes>    
          <Route path='/' element={<Welcome />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/home' element={WithNavbar(Main)} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
