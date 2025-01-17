import jumbo from "../assets/jumbo.png";
import { TypeAnimation } from "react-type-animation";


const jumbotron = () => {
  return (
<section id="tentang" className="min-h-screen bg-[#F3F1EF] pt-14">


<div className="flex flex-col md:flex-row-reverse justify-center items-center min-h-screen md:px-24">

<div className="mx-auto max-w-[320px] md:max-w-full md:flex md:flex-row-reverse mt-10">
        <img src={jumbo} alt="" className="" width={400} />
        <div className="mt-4 md:mt-0 w-full">
        <div className="text-center pb-14 md:text-left md:w-[90%]">
    <h3 className="my-8 text-base">Aditya Ridho</h3>
    <TypeAnimation
      sequence={[
        "Front-End Web &",
        1400,
        " ",
        700,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
      className="font-extrabold md:text-5xl text-2xl italic"
    />
    <br />
    <TypeAnimation
      sequence={[
        "UI/UX Developer 🚀",
        1200,
        " ",
        600,
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
      className="font-extrabold md:text-5xl text-2xl italic"
    />
    <p className="my-8 text-base">
      Saya adalah peminat nombor 1 barcelona semenjak kecil sampai sekarang, because barca is debes
    </p>
    <div className="flex flex-col md:flex-row gap-4">
      <a 
        href="" 
        className="p-4 rounded-xl hover:bg-[#4832c2] font-semibold bg-[#8773FE] text-white duration-200"
      >
        Kontak Saya
      </a>
      <a 
        href="" 
        className="p-4 rounded-xl hover:underline font-semibold"
      >
        Tentang Saya →
      </a>
    </div>
  </div>
        </div>
      </div>
</div>


  
</section>

  );
};

export default jumbotron;
