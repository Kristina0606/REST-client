import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export function useAuth() {
  const { name, email, token, id } = useSelector(
    (state: RootState) => state.user
  );

  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  };
}
