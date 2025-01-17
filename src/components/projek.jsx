import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import projek from "../assets/project-1.png";
import projek2 from "../assets/project-2.png";
import projek3 from "../assets/project-3.png";
import projek4 from "../assets/project-4.png";


export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <section className="pt-20 pb-20 min-h-screen md:mx-32 mx-10 " id="projek">
      <h1 className="text-4xl md:text-6xl font-bold py-10 text-center md:text-end text-[#001F3F] ">
        projek
      </h1>

      <div
        className="embla w-[90%] mx-auto pt-14"
        ref={emblaRef}
      >
        <div className="embla__container ">
          <div className="embla__slide text-center">
            <img src={projek} alt="p1" className="rounded-xl" />
            <h2 className="text-xl font-bold mt-4">Portfolio Website</h2>
            <p className="md:text-base text-sm">
              Membuat website portfolio pribadi menggunkan React JS, Tailwind
              CSS dan Vite.
            </p>
            <a href="https://adtyrdhon.netlify.app/" target="_blank" className="text-blue-800 hover:underline">
              adtyrdhon.netlify.app
            </a>
          </div>
          <div className="embla__slide text-center">
            <img src={projek2} alt="p2" className="rounded-xl" />
            <h2 className="text-xl font-bold mt-4 text-center">
              Landing Page Website
            </h2>
            <p className="md:text-base text-sm">
              Berkolaborasi membuat website landing page sebuah acara menggunkan
              React JS, Tailwind CSS dan Vite.
            </p>
            <a href="https://pesona23.vercel.app/" target="_blank" className="text-yellow-700 hover:underline">
              pesona23.vercel.app
            </a>
          </div>
          <div className="embla__slide text-center">
            <img src={projek3} alt="p3" className="rounded-xl" />
            <h2 className="text-xl font-bold mt-4">
              Are You A Cat or Human?
            </h2>
            <p className="md:text-base text-sm">
              Implementasi sederhana Teachable Machine untuk mengidentifikasi objek berupa kucing atau manusia berdasarkan kamera pengguna. 
            </p>
            <a href="https://areyouacat.netlify.app/" target="_blank" className="text-red-700 hover:underline">
              areyouacat.netlify.app
            </a>
          </div>
          <div className="embla__slide text-center">
            <img src={projek4} alt="p1" className="rounded-xl" />
            <h2 className="text-xl font-bold mt-4">Prototype Monitoring Kualitas Udara dengan esp8266</h2>
            <p className="md:text-base text-sm">
            Prototype sederhana untuk memonitoring kualitas udara dalam pabrik semen yang ditampilkan melalui lcd dan peringatan melalui suara.
            </p>
          </div>
        </div>
      </div>


      {/* <div
        className="embla max-w-[320px] md:max-w-[800px] mx-auto"
        ref={emblaRef}
      >
        <div className="embla__container ">
          <div className="embla__slide text-center">
            <img src={projek} alt="p1" className="rounded-xl" />
            <h2 className="text-xl font-bold mt-4">Portfolio Website</h2>
            <p>
              Membuat website portfolio pribadi menggunkan React JS, Tailwind
              CSS dan Vite.
            </p>
            <div className="flex justify-between mx-20 mt-6">
              <SiReact size={40} />
              <SiTailwindcss size={40} />
              <SiVite size={40} />
            </div>
          </div>
          <div className="embla__slide text-center">
            <img src={projek2} alt="p2" className="rounded-xl" />
            <h2 className="text-xl font-bold mt-4 text-center">
              Landing Page Website
            </h2>
            <p>
              Berkolaborasi membuat website landing page sebuah acara menggunkan
              React JS, Tailwind CSS dan Vite.
            </p>
            <div className="flex justify-between mx-20 mt-6">
              <SiReact size={40} />
              <SiTailwindcss size={40} />
              <SiVite size={40} />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}