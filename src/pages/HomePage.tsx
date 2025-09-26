import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import { getAuth, signOut } from 'firebase/auth';
import appLogo from '../assets/Снимок экрана 2025-09-14 в 17.34.49-Photoroom.png';
import logOutImg from '../assets/log-out_6407189.png';
import RestPanel from '../components/restLogic/RestPanel';
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

  if (initializing)
    return <div className="text-center text-[#7d786d]">Loading...</div>;

  return (
    <>
      <header className="bg-[#cccac2] opacity-70 flex justify-between pl-10 pr-15">
        <div>
          <img
            src={appLogo}
            className="h-16 pl-5 cursor-pointer"
            alt="app-logo"
          />
        </div>
        <div className="flex gap-4 items-center justify-center">
          <p>Hello {name ? name : 'user'}!</p>
          <p>{email}</p>
          <button
            className="flex gap-2 px-4 py-2 cursor-pointer rounded-md bg-[#f5f5f5] text-[#4a4a4a] hover:bg-[#e0e0e0] transition-colors duration-200"
            onClick={handleLogOut}
          >
            <p>log out</p>
            <img src={logOutImg} alt="logOutImg" className="w-6" />
          </button>
        </div>
      </header>
      <main className="flex items-center justify-center flex-col">
        <RestPanel />
      </main>
    </>
  );
};

export default HomePage;
