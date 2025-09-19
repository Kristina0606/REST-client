import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import {
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
} from 'firebase/auth';
import { removeUser, setUser } from '../store/slices/userSlice';
import { useEffect, useState } from 'react';

export function useAuth() {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);
  const { name, email, token, id } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    const auth = getAuth();

    setPersistence(auth, browserLocalPersistence)
      .catch((err) => {
        console.warn('setPersistence failed', err);
      })
      .finally(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(
              setUser({
                name: user.displayName ?? null,
                email: user.email ?? null,
                token: user.uid,
                id: user.refreshToken ?? null,
              })
            );
          } else {
            dispatch(removeUser());
          }
          setInitializing(false);
        });

        return () => unsubscribe();
      });
  }, [dispatch]);

  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
    initializing,
  };
}
