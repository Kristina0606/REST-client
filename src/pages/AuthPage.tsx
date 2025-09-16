import type { FC } from 'react';
import FormsEL from '../components/FormsEl';
import nftImg from '../assets/3d-nft-icon-developer-male-illustration.png';
import appLogo from '../assets/Снимок экрана 2025-09-14 в 17.34.49-Photoroom.png';

const AuthPage: FC = () => {
  return (
    <div>
      <div>
        <img
          src={appLogo}
          className="h-20 pl-5 cursor-pointer"
          alt="app-logo"
        />
      </div>
      <div className="flex gap-20 justify-center items-center ">
        <div className="flex flex-col gap-2 justify-center items-center p-6 rounded-3xl bg-[#FAF0E6]">
          <p className="font-sans font-bold text-3xl text-[#a89c83] hover:text-[#9977fb] transition">
            Welcome back!
          </p>
          <FormsEL />
        </div>
        <div>
          <img src={nftImg} alt="nft-img" className="w-170" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
