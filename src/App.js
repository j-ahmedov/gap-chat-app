import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome/Welcome';
import Register from './pages/signup/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />}/>
          <Route path='/sign-up' element={<Register />}/>
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
