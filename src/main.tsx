import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout.tsx';
import SignUpPage from './pages/SignUpPage.tsx';

const router = createBrowserRouter([
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
        element: <SignUpPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
