import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './LoginPage.scss';
export const LoginPage = () => {
  const { onLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin('Joselu');
    navigate('/', {
      replace: true,
    });
  };
  return (
    <div className="login wrapper">
      <h1 className="login__title">Login Page</h1>
      <button className="login__btn" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};
