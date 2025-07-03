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
    <header className="fixed w-full top-0 left-0 z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-6 md:px-10">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[120px]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-gray-800 font-semibold">
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

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden z-[60] text-gray-800"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-2xl font-bold text-gray-800 transition-transform duration-500 ease-in-out ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setNavOpen(false)}
              className="relative group text-lg transition-all"
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
