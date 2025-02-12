import React from "react";
import Image from "next/image";
import hero from "@/public/images/hero.png";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full">
        {/* Hero */}
        <div className="pt-[12vh] md:pt-[12vh] bg-white overflow-hidden">
          <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
              {/* Hero Content */}
              <div className="order-2 lg:order-1 lg:w-4/5">
                <h1 className="text-center lg:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-black ">
                  Bangun{" "}
                  <span className="text-orange-500">
                    Masa Depan <br />
                    Digitalmu{" "}
                  </span>{" "}
                  Sekarang!
                </h1>
              </div>
              {/* Hero Image */}
              <div className="order-1 lg:order-2 flex justify-end ml-auto">
                <Image
                  src={hero}
                  width={800}
                  height={600}
                  alt="Hero"
                  className="object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* End of Hero */}

        {/* Layanan Kami */}
        <div className="">
          <div className="w-full h-screen flex items-center justify-center">
            {/* Text */}
            <div className="text-center max-w-2xl px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-black">
                Layanan Kami
              </h1>
              <p className="text-black text-center pt-[2vh]">
                Kami hadir untuk membantu bisnis dan brand Anda berkembang
                dengan layanan digital berkualitas tinggi. Dari pembuatan
                website hingga pengelolaan media sosial, kami siap memberikan
                solusi terbaik yang disesuaikan dengan kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
        {/* End Of Layanan Kami */}
      </div>
    </div>
  );
}
