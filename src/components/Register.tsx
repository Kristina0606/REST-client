import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import SignUpForm from './SignUpForm';
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router';

const Register: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (name: string, email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log('registed user:', user);
        await updateProfile(user, { displayName: name });
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
      .catch(console.error);
  };

  return (
    <>
      <SignUpForm handleclick={handleRegister} />
    </>
  );
};

export default Register;
