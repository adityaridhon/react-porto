import jumbo from "../assets/wow.png";
import { TypeAnimation } from "react-type-animation";

const Jumbotron = () => {
  return (
    <section id="tentang" className="bg-[#F5F5F5] pt-14 relative">
      <div className="flex flex-col md:flex-row-reverse justify-center items-center min-h-screen mx-14 md:mx-20" data-aos="fade-up">
        
        {/* Gambar */}
        <div className="flex-shrink-0 md:ml-10 self-center mt-20 md:mt-0">
          <img
            src={jumbo}
            alt="me"
            className="bg-[#FCDA68] rounded-br-[12rem] rounded-tl-[12rem] shadow-2xl max-w-[400px] w-full h-auto "
          />
        </div>

        {/* Teks */}
        <div className="mt-10 md:mt-0 w-full">
          <div className="text-center pb-14 md:text-left md:w-[90%]">
            <h3 className="my-8 text-2xl">Aditya Ridho</h3>
            
            <TypeAnimation
              sequence={["Front-End Web &", 1400, " ", 700]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="text-[#4832c2] font-extrabold md:text-5xl text-2xl italic"
            />
            <br />
            <TypeAnimation
              sequence={["UI/UX Developer 🚀", 1200, " ", 600]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="text-[#FCDA68] font-extrabold md:text-5xl text-2xl italic"
            />
            
            <p className="my-8 text-base">
              Halo! Namaku Adit, aku adalah mahasiswa aktif Program Studi Informatika di Institut Teknologi Kalimantan. Selama berkuliah aku memiliki beberapa ketertarikan di bidang UI/UX Design dan Web Development.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#footer"
                className="p-3 rounded-xl hover:bg-[#4832c2] hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl font-semibold bg-[#8773FE] text-white transition-all duration-200"
              >
                Kontak Saya
              </a>
              <a
                href="#about"
                className="p-3 rounded-xl font-semibold border border-[#4832c2] text-[#4832c2] hover:bg-[#4832c2] hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl hover:text-white transition-all duration-200"
              >
                Tentang Saya
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Jumbotron;
