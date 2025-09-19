import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import { getAuth, signOut } from 'firebase/auth';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, email, isAuth, initializing } = useAuth();

  useEffect(() => {
    if (!initializing && !isAuth) {
      navigate('/login');
    }
  }, [initializing, isAuth, navigate]);

  const handleLogOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(removeUser());
      navigate('/login', { replace: true });
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  if (initializing) return <div>Loading...</div>;

  return (
    <div>
      <p>Hello {name}!</p>
      <button className="bg-white cursor-pointer border" onClick={handleLogOut}>
        log out from {email}
      </button>
    </div>
  );
};

export default HomePage;
