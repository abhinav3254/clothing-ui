import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../appSlice';
import * as AuthService from "../Services/authService";
import '../Styles/login.scss';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const toast:any = useRef(null);

  const showToast = (type:string,message:string) => {
      toast.current.show({ severity: type, detail: message });
  };
  const dispatch = useDispatch();
const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthService.login(formData)
    .then((res:any) => {
      console.log('res',res);
      showToast('success',"login")
      localStorage.setItem('token',res.data.response.token)
      localStorage.setItem('userId',res.data.response.userId)
      dispatch(login(res.data.response.token));
      navigate('/blog')
    })
    .catch((err) => {

      showToast('error',err.response.data.message)
      console.log('err',err);
    });
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src= 'https://news.felo.me/wp-content/uploads/2024/05/blog.jpeg' alt="Logo" className="center-image" />
      </div>
      <div className="login-right">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default Login;
