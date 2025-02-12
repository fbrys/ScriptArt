import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navLinks } from "@/app/constant/constant";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ closeNav, showNav }: Props) {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed ${navOpen} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bg-black opacity-70 w-full h-[100vh]`}
      />
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-orange-500 space-y-6 z-[100006]`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] cursor-pointer sm:w-8 sm:h-8 w-6 h-6 text-white"
        />
      </div>
    </div>
  );
}
