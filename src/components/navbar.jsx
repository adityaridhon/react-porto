import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { name: "Tentang", href: "#about" },
    { name: "Projek", href: "#projek" },
    { name: "Pengalaman", href: "#pengalaman" },
  ];

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-5">
      <div className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg flex items-center justify-between px-6 md:px-14 h-[5rem] w-full max-w-[76rem] z-50 relative">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-black">
          <img src={logo} alt="logo" className="w-full md:h-[2.5rem] h-[2rem]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-semibold">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group text-lg transition-all"
            >
              <span className="group-hover:text-[#4832c2] transition">
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#4832c2] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-[60] text-gray-800"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu*/}
      <div
        className={`absolute top-full mt-4 w-[29.5rem] px-5 transition-all duration-500 ease-in-out ${
          navOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-8 md:hidden z-40">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setNavOpen(false)}
              className="relative group text-lg text-gray-800 font-semibold transition-all"
            >
              <span className="group-hover:text-[#4832c2] transition">
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#4832c2] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
