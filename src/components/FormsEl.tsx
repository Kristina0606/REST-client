import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import Login from './Login';
import Register from './Register';

const FormsEL: FC = () => {
  const isSignUp = useSelector((state: RootState) => state.isSignUp.isSignUp);

  return <div>{isSignUp ? <Login /> : <Register />}</div>;
};

export default FormsEL;
