"use client";

import Link from "next/link";
import CustomButton from './custom/CustomButton';
import { useAuth } from '@/contexts/AuthContext'; 

const Header = () => {
  const { isConnected, toggleConnect } = useAuth();

  return (
    <header className="w-full">
      <nav className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center sm:px-16 px-4 py-7">
        <Link href="/" className="font-semi-bold-plus text-primary-black-100 text-xl uppercase mb-4 sm:mb-0">
          Marketplace.
        </Link>

        <CustomButton
          title={isConnected ? "Account" : "Connect wallet"}
          btnType="button"
          btnStyles="btn-outlined-styles"
          btnTitleStyle="btn-outlined-title-styles"
          handleClick={toggleConnect}
        />
      </nav>
    </header>
  );
};

export default Header;
