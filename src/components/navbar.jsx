import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";


const navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full z-10 flex justify-between h-[80px] items-center px-10 bg-[#F3F1EF] border-b-2 border-gray-700">
      <div><a href="/"> <img src={logo} width={140} alt="" /></a>
       
      </div>
      <ul className="hidden md:flex text-lg font-medium text-[#171513]">
        <li className="p-5">
          <a href="#about" className="hover:underline">
            Tentang Saya
          </a>
        </li>
        <li className="p-5">
          <a href="#projek" className="hover:underline">
            Projek
          </a>
        </li>
        <li className="p-5">
          <a href="#pengalaman" className="hover:underline">
            Pengalaman
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden z-30">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed h-screen z-20 right-0 top-0 w-[55%] bg-stone-200 ease-in-out duration-700"
            : "fixed h-screen right-[-100%]"
        }
      >
        
        <ul className="p-8 text-lg mt-8 text-gray-800 font-medium">
          <li className="p-5">
            <a href="#about" className="hover:underline">
            Tentang Saya
            </a>
          </li>
          <li className="p-5">
            <a href="#projek" className="hover:underline">
              Projek
            </a>
          </li>
          <li className="p-5">
            <a href="#pengalaman" className="hover:underline">
              Pengalaman
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
