import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import Layout from './pages/Layout.tsx';
import AuthPage from './pages/AuthPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      HydrateFallback: () => (
        <div className="h-screen flex items-center justify-center">
          loading...
        </div>
      ),
      children: [
        {
          index: true,
          loader: () => redirect('/login', { status: 302 }),
        },
        {
          path: '/login',
          element: <AuthPage />,
        },
      ],
    },
  ],
  { basename: '/rest-client' }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
