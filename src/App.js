import './App.css';
import Home from '../src/views/home/home';
import Login from '../src/views/login/login';
import React, {useState} from 'react';

function App() {

  const [isAuth, setAuth] = useState(false);
  return <div className="App">{isAuth ? <Home setAuth={setAuth}  /> : <Login setAuth={setAuth} />}</div>;
}

export default App;
