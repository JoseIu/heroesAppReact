import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';
export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
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
