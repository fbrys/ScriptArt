import Image from "next/image";
import React from "react";

export default function HeroHome() {
  return (
    <div className="flex items-center justivy-center w-full h-screen p-4">
      <div className=" md:m-[100px] rounded-lg overflow-hidden flex flex-col md:flex-row-reverse w-full max-w-full ">
        <div className="w-full xl:w-1/4 items-end justify-end flex">
          <Image
            src="/images/hero.png"
            alt="Image"
            width={400}
            height={400}
            className="w-full  h-full items-end justify-end flex "
          ></Image>
        </div>
        <div className="w-full xl:w-3/4 p-4 md:p-6 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-start lg:text-start sm:text-4xl lg:text-6xl xl:text-7xl  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-black">
            Bangun <span className="text-orange-500">Masa Depan</span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-start lg:text-start sm:text-4xl lg:text-6xl xl:text-7xl  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-black">
            <span className="text-orange-500">Digitalmu,</span> Sekarang!
          </h1>
          <h1 className="text-lg pt-4 flex-col text-gray-400 font-bold text-center md:text-start uppercase mt-2">
            Inovasi, Kolaborasi, Prestasi
          </h1>
        </div>
      </div>
    </div>
  );
}
