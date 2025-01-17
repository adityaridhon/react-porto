import kpu from "../assets/KPU.jpg";
import infinite from "../assets/infinite.jpeg";
import spirit from "../assets/spirit.jpeg";
import hmif from "../assets/HMIF.png";

const exp = () => {
  return (
    <section className="pt-20 pb-20 md:mx-32 mx-10" id="pengalaman">
      <h2 className='md:text-start text-center text-[#001F3F] font-bold text-4xl md:text-6xl'>pengalaman</h2>

      {/* HMIF */}
      <div className="mx-auto max-w-[320px] md:max-w-[900px] md:flex md:flex-row-reverse mt-10">
        <img src={hmif} alt="" className="rounded-xl" width={350} />
        <div className="mt-4 md:mt-0 w-full">
          <h2 className="text-blue-600 font-bold text-lg md:text-2xl">
         HMIF ITK
          </h2>
          <h3 className="font-semibold text-base md:text-lg">Staff Departemen Kesejahteraan dan Minat Bakat</h3>
          <p className="font-semibold md:text-base text-sm">Oktober 2024 - Sekarang</p>
          <ul className="list-disc ml-5 mt-1 md:text-base text-sm">
            <li>Membuat form untuk pemetaan minat dan bakat mahasiswa aktif Informatika ITK</li>
            <li>Memetakan data minat dan bakat mahasiswa aktif Informatika ITK</li>
            <li>Memfasilitasi tutor beraktif yang diselenggarakan Departemen KMB</li>
          </ul>
        </div>
      </div>
      

      {/* KPU */}
      <div className="mx-auto max-w-[320px] md:max-w-[900px] md:flex md:flex-row pt-10">
        <img src={kpu} alt="inf" className="rounded-xl" width={350} />
        <div className="mt-4 md:mt-0 md:ml-6">
          <h2 className="text-blue-600 font-bold text-lg md:text-2xl">
          KPU HMIF ITK 2024
          </h2>
          <h3 className="font-semibold text-base md:text-lg">Staff PDD</h3>
          <p className="font-semibold md:text-base text-sm">Juni - September 2024</p>
          <ul className="list-disc ml-5 mt-1 md:text-base text-sm">
            <li>Melakukan publikasi informasi di sosial media KPU HMIF ITK</li>
          </ul>
        </div>
      </div>


       {/* Inf */}
       <div className="mx-auto max-w-[320px] md:max-w-[900px] md:flex md:flex-row-reverse mt-10">
        <img src={infinite} alt="inf" className="rounded-xl" width={350} />
        <div className="mt-4 md:mt-0 w-full">
          <h2 className="text-blue-600 font-bold text-lg md:text-2xl">
            INFINITE Vol. 3
          </h2>
          <h3 className="font-semibold text-base md:text-lg">Staff Lomba</h3>
          <p className="font-semibold md:text-base text-sm">Januari - Juni 2024</p>
          <ul className="list-disc ml-5 mt-1 md:text-base text-sm">
            <li>Membuat Terms Of Reference lomba yang dikompetisikan</li>
            <li>
              Menganalisis dan mendiskusikan kebutuhan setiap lomba yang
              dikompetisikan{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* SPIRIT */}
      <div className="mx-auto max-w-[320px] md:max-w-[900px] md:flex md:flex-row pt-10">
        <img src={spirit} alt="" className="rounded-xl" width={350} />
        <div className="mt-4 md:mt-0 md:ml-6">
          <h2 className="text-blue-600 font-bold text-lg md:text-2xl">
         SPIRIT ITK 2024
          </h2>
          <h3 className="font-semibold text-base md:text-lg">PJ Sekolah</h3>
          <p className="font-semibold md:text-base text-sm">Januari 2024</p>
          <ul className="list-disc ml-5 mt-1 md:text-base text-sm">
            <li>Bertanggung jawab atas terselenggaranya SPIRIT di sekolah</li>
            <li>Mengkoordinasi Volunteer pada kegiatan SPIRIT</li>
          </ul>
        </div>
      </div>
     

    </section>
  );
};

export default exp;
