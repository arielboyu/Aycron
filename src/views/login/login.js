import React, {useState} from 'react';
import './login.css';
import {useSelector} from 'react-redux';
import store from '../../redux/store/index';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loginUser} from '../../redux/actions/index';

const Login = ({setAuth}) => {
  const users = useSelector (store => store.users);

  const [data, setData] = useState ({
    username: '',
    password: '',
  });

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = e => {
    e.preventDefault ();
    const {username, password} = data;
    if (!username || !password) {
      return toast.error ('faltan campos');
    }
    let userData = users.find (user => data.username === user.user);
    if (
      userData.password === data.password &&
      userData.user === data.username
    ) {
      toast.success ('login ok!');
      setTimeout (() => {
        setAuth (true);
        store.dispatch(loginUser (userData));
      }, 2000);
    } else {
      toast.error ('user or password incorrect');
    }
  };

  return (
    <div className="login-box">
      <form onSubmit={HandleSubmit} className="form-login">
        <input
          name="username"
          onChange={handleChange}
          type="text"
          placeholder="user"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
