import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed z-50 w-full flex justify-between h-[80px] items-center p-5 bg-white border-b border-gray-200">
      <h1 className="text-3xl font-bold ml-4 text-blue-800">ArN</h1>
      <ul className="hidden md:flex text-xl font-medium">
        <li className="p-5">
          <a href="#tentang" className="hover:underline">
            Tentang Saya
          </a>
        </li>
        <li className="p-5">
          <a href="#pendidikan" className="hover:underline">
            Pendidikan
          </a>
        </li>
        <li className="p-5">
          <a href="#pengalaman" className="hover:underline">
            Pengalaman
          </a>
        </li>
        <li className="p-5">
          <a href="#projek" className="hover:underline">
            Projek
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden z-30">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed h-screen z-20 right-0 top-0 w-[70%] bg-stone-200 ease-in-out duration-500"
            : "fixed h-screen right-[-100%]"
        }
      >
        <ul className="p-8 text-lg mt-8 text-gray-800 font-medium">
          <li className="p-5">
            <a href="#tentang" className="hover:underline">
              Tentang Saya
            </a>
          </li>
          <li className="p-5">
            <a href="#pendidikan" className="hover:underline">
              Pendidikan
            </a>
          </li>
          <li className="p-5">
            <a href="#pengalaman" className="hover:underline">
              Pengalaman
            </a>
          </li>
          <li className="p-5">
            <a href="#projek" className="hover:underline">
              Projek
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
