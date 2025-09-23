import type { FC } from 'react';
import { Outlet } from 'react-router';
import githubLogo from '../assets/github_1051326.png';
import linkedinLogo from '../assets/linkedin_1384088.png';

const Layout: FC = () => {
  return (
    <>
      <div className="h-screen bg-[#EAE7DC] flex flex-col justify-between">
        <div>
          <Outlet />
        </div>
        <footer className="bg-[#cccac2] opacity-50 flex justify-between items-center h-16 pl-20 pr-20">
          <div>
            <p>&#9400;2025 Request Flow</p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md"
              target="_blanc"
            >
              <img src={githubLogo} alt="github-logo" className="w-8" />
            </a>
            <a
              href="https://linkedin.com/in/kristina-buben-806658271"
              target="_blanc"
            >
              <img src={linkedinLogo} alt="linkedin-logo" className="w-8" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
