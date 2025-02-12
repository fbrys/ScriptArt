"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { navLinks } from "../../constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

export default function Navbar({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY = 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  });

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      {/* <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Image src={logo} alt="Logo" width={120} height={120}></Image>
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
          <div className="flex items-center space-x-4">
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div> */}
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Image src={logo} alt="Logo" width={120} height={120} />
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
          <div className="flex items-center space-x-4">
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
