import infinite from "../assets/infinite.jpeg";
import spirit from "../assets/spirit.jpeg";

const exp = () => {
  return (
    <section className="min-h-screen pt-20 pb-20" id="pengalaman">
      <h1 className="text-2xl md:text-3xl font-bold py-10 text-center">
        Pengalaman Organisasi/Kepanitiaan
      </h1>

      {/* INFINITE */}
      <div className="mx-auto max-w-[320px] md:max-w-[900px] md:flex md:flex-row ">
        <img src={infinite} alt="inf" className="rounded-xl" width={350} />
        <div className="mt-4 md:mt-0 md:ml-6">
          <h2 className="font-bold text-lg md:text-xl">
            Kepanitiaan{" "}
            <span className="text-blue-900 hover:underline cursor-pointer">
              INFINITE
            </span>{" "}
            Vol. 3
          </h2>
          <h3 className="font-semibold">Staff Lomba</h3>
          <ul className="list-disc ml-5 mt-1">
            <li>Membuat Terms Of Reference lomba yang dikompetisikan</li>
            <li>
              Menganalisis dan mendiskusikan kebutuhan setiap lomba yang
              dikompetisikan{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* SPIRIT */}

      <div className="mx-auto max-w-[320px] md:max-w-[900px] md:flex md:flex-row-reverse mt-10">
        <img src={spirit} alt="" className="rounded-xl" width={350} />
        <div className="mt-4 md:mt-0 w-full">
          <h2 className="font-bold text-lg md:text-xl">
            <span className="text-amber-700 hover:underline cursor-pointer">
              SPIRIT
            </span>{" "}
            ITK 2024
          </h2>
          <h3 className="font-semibold">PJ Sekolah</h3>
          <ul className="list-disc ml-5 mt-1">
            <li>Bertanggung jawab atas terselenggaranya SPIRIT di sekolah</li>
            <li>Mengkoordinasi Volunteer pada kegiatan SPIRIT</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default exp;
