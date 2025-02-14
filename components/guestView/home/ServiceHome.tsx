import Image from "next/image";
import React from "react";

export default function ServiceHome() {
  return (
    <div className="bg-orange-500 h-auto">
      <div className="pt-5 space-x-20">
        <div className="flex items-center justify-center">
          <div className="text-center max-w-2xl px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-white">
              Layanan Kami
            </h1>
            <p className="text-white text-center pt-[2vh]">
              Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan
              layanan digital berkualitas tinggi. Dari pembuatan website hingga
              pengelolaan media sosial, kami siap memberikan solusi terbaik yang
              disesuaikan dengan kebutuhan Anda.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:px-5 mt-5  max-w-6xl w-full items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {[
              {
                title: "Web Development",
                description:
                  "Ingin memiliki website yang modern, cepat, dan responsif? Kami siap membangun website yang tidak hanya terlihat menarik tetapi juga SEO-friendly dan mobile-friendly, memastikan bisnis Anda lebih mudah ditemukan dan diakses kapan saja!",
              },
              {
                title: "Mobile Application",
                description:
                  "Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan layanan digital berkualitas tinggi. Dari pembuatan website hingga pengelolaan media sosial, kami siap memberikan solusi terbaik yang disesuaikan dengan kebutuhan Anda.",
              },
              {
                title: "UI/UX Design",
                description:
                  "Desain bukan hanya soal estetika, tetapi juga pengalaman pengguna! Kami menciptakan desain UI/UX interaktif dan intuitif yang membuat aplikasi dan website Anda semakin menarik, mudah digunakan, dan meningkatkan kepuasan pelanggan.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 "
              >
                <a href="#">
                  <Image
                    className="rounded-full mx-auto mt-5"
                    src="/images/image.png"
                    alt=""
                    width={150}
                    height={150}
                  />
                </a>
                <div className="p-5 text-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {service.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
