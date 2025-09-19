import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const { name, email, isAuth } = useAuth();
  const goToLogin = () => navigate('/login');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      goToLogin();
    }
  }, [isAuth]);

  const handleLogOut = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <div>
        <p>Hello {name}!</p>
        <button
          className="bg-white cursor-pointer border"
          onClick={handleLogOut}
        >
          log out from {email}
        </button>
      </div>
    </>
  );
};

export default HomePage;
