import type { FC } from 'react';
import SignUpForm from './SignUpForm';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import SignInForm from './SignInForm';

const FormsEL: FC = () => {
  const isSignUp = useSelector((state: RootState) => state.isSignUp.isSignUp);

  return <div>{isSignUp ? <SignInForm /> : <SignUpForm />}</div>;
};

export default FormsEL;
