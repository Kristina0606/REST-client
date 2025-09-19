import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout.tsx';
import AuthPage from './pages/AuthPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import './firebase.ts';
import HomePage from './pages/HomePage.tsx';

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
          element: <HomePage />,
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
