import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navbar = () => {

  const [nav, setNav] = useState (false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="fixed z-50 w-full flex justify-between h-[80px] items-center p-5 backdrop-filter backdrop-blur-lg border-b border-gray-200">
      <h1 className="text-3xl font-bold ml-4">ArN</h1>
      <ul className="hidden md:flex text-xl">      
        <li className="p-5"><a href="#tentang" className="hover:underline">Tentang Saya</a></li>
        <li className="p-5"><a href="#pendidikan" className="hover:underline">Pendidikan</a></li>
        <li className="p-5"><a href="#pengalaman" className="hover:underline">Pengalaman</a></li>
      </ul>
      
      <div onClick={handleNav} className="block md:hidden z-30">
        {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
      </div>

      <div className={nav ? 'fixed h-screen z-20 right-0 top-0 w-[60%] bg-gray-400 ease-in-out duration-500' : 'fixed h-screen right-[-100%]'}>
      <ul className="p-8 text-xl mt-8 text-white">      
        <li className="p-5"><a href="#tentang" className="hover:underline">Tentang Saya</a></li>
        <li className="p-5"><a href="#pendidikan" className="hover:underline">Pendidikan</a></li>
        <li className="p-5"><a href="#pengalaman" className="hover:underline">Pengalaman</a></li>
      </ul>
      </div>
  
    </div>
  )
}

export default navbar