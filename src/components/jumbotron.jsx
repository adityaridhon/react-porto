import home from '../assets/home.png'
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin  } from "react-icons/ai";
import { IoIosDocument } from "react-icons/io";


const jumbotron = () => {
  return (
    <section id="tentang" className="h-[110vh] pt-20 md:pt-40"> 
      <div className="md:flex justify-between pt-6">
        <img src={home} alt="home" width={300} className='mx-auto md:ml-20'/>
        <div className='text-center mt-10'>
          <h2 className='font-bold text-3xl text-gray-800 md:text-4xl mb-2' ><span className='text-cyan-800'>Adit</span>ya Ridho Nugroho</h2>
          <TypeAnimation sequence={['Front-End', 1000, 'Front-End Web Enthusiast', 1000, 'Front-End Web Developer ',1000,]} wrapper="span" speed={50} repeat={Infinity} className='font-semibold text-gray-800'
    />
          <p className='mt-2 mx-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae facilis possimus, illum autem, hic enim nostrum veniam quam perspiciatis placeat, ea perferendis. Veniam modi ipsum rerum molestiae ut incidunt?</p>
        <div className='flex justify-center mt-8 gap-2 md:justify-start md:ml-12'>
          <a href="https://github.com/adityaridhon" target='_blank' className='flex bg-transparent border border-slate-800 hover:bg-slate-800 hover:text-white duration-200 px-5 gap-2 py-3 text-dark rounded-lg'><AiFillGithub size={24}/></a>
          <a href="https://www.instagram.com/adtyrdho" target='_blank' className='flex bg-transparent border border-slate-800 hover:bg-gradient-to-br from-[#f9ce34] to-[#ee2a7b] hover:border-white hover:text-white duration-200 px-5 gap-2 py-3 text-dark rounded-lg'><AiOutlineInstagram size={24}/> </a>
          <a href="https://www.linkedin.com/in/aditya-ridho/" target='_blank' className='flex bg-transparent border border-slate-800 hover:bg-blue-800 hover:border-blue-800 hover:text-white duration-200 px-5 gap-2 py-3 text-dark rounded-lg'> <AiFillLinkedin size={24}/></a>
        </div>
        </div>
      </div>
      


    </section>
)
}

export default jumbotron