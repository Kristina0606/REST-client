import type { FC } from 'react';
import { Outlet } from 'react-router';

const Layout: FC = () => {
  return (
    <>
      <div className="bg-[#EAE7DC] h-screen">
        <Outlet />
      </div>
      <footer>
        <p></p>
        <p></p>
      </footer>
    </>
  );
};

export default Layout;
