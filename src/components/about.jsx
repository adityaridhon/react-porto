import React from "react";
import home from "../assets/first.png";

const About = () => {
  return (
    <section id="about" className="pt-40" data-aos-delay="200">
      <div className="mx-auto max-w-[26rem] md:max-w-[90%] flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-6 md:px-12">
        
        {/* Gambar */}
        <img
          data-aos="zoom-in-right"
          src={home}
          alt="tentang"
          className="w-full md:w-[30%] rounded-xl"
        />
        
        {/* Konten */}
        <div className="text-gray-900 md:rounded-e-3xl rounded-b-3xl" data-aos="zoom-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Saya</h2>
          
          <p className="text-base md:text-lg leading-relaxed">
            Halo! Namaku <span className="font-bold">Adit</span>, aku adalah mahasiswa aktif Program Studi Informatika di Institut Teknologi Kalimantan. 
            Selama berkuliah aku memiliki beberapa ketertarikan di bidang{" "}
            <span className="bg-gradient-to-tr from-[#4832c2] to-[#FCDA68] bg-clip-text text-transparent font-bold">
              UI/UX Design dan Web Development.
            </span>{" "}
            Ketertarikan tersebut juga aku implementasikan dalam beberapa projek yang sudah aku buat, selebihnya kalian dapat lihat di portfolio ini!
          </p>

          <div className="mt-6">
            <a
              href="#footer"
              className="inline-block px-6 py-3 text-sm md:text-base rounded-xl font-semibold text-white bg-[#8773FE] hover:bg-[#4832c2] hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              Kontak Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
