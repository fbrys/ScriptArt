"use client";

import React from "react";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide navbar if the route starts with "/admin"
  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <footer className="w-full bg-white border-t border-gray-300">
      <div className="w-full px-6 md:px-[120px] py-8 flex flex-wrap justify-between items-center">
        {/* Left Section */} 
        <div className="max-w-md md:px-[22px] text-center md:text-left mb-6 md:mb-0">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mx-auto md:ml-20"
          />
          <h2 className="text-xl font-bold mt-4 md:mt-0">
            Solusi Digital Kreatif untuk Website, Aplikasi, dan Desain Tanpa
            Batas!
          </h2>
          <p className="text-orange-600 mt-2">021(985212)</p>
          <p className="text-gray-600">iniemail@gmail.com</p>
          <p className="text-gray-600">Jl. Bromo 7 Gebang Banjarsari</p>
          <p className="text-gray-600">Surakarta Jawa Tengah</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto text-center md:text-left md:space-y-2 md:mt-10">
          <div className="flex flex-col md:flex-row md:gap-24 items-center">
            <ul className="md:grid md:grid-cols-2 gap-4 text-gray-700 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-orange-600">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Layanan Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Harga
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <div className="flex md:block space-x-4 mt-4">
              <a href="/">
                <GrInstagram className="text-3xl md:text-4xl" />
              </a>
              <a href="">
                <BsYoutube className="text-3xl md:text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-orange-500 text-white text-center py-4">
        <p className="text-sm md:text-base">
          Copyright © 2024 ScriptArt, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
