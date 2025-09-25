import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, type FC } from 'react';
import { useDispatch } from 'react-redux';
import SignInForm from './SignInForm';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isErrorUser, setisErrorUser] = useState(false);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log('log in user:', user);
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            token: user.uid,
            id: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch(() => setisErrorUser(true));
  };

  return <SignInForm isErrorUser={isErrorUser} handleclick={handleLogin} />;
};

export default Login;
