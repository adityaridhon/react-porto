import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { SiReact, SiTailwindcss, SiVite } from "react-icons/si";
import projek from '../assets/project-1.png'
import projek2 from '../assets/project-2.png'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    
    <div className='pt-20 pb-20 bg-slate-100 min-h-screen' id='pengalaman'>
      <h1 className="text-3xl font-bold py-10 text-center">Projek</h1>
        <div className="embla max-w-[320px] md:max-w-[800px] mx-auto" ref={emblaRef}>
        <div className="embla__container ">
            <div className="embla__slide text-center">
                <img src={projek} alt="p1" className='rounded-xl'/>
                <h2 className='text-xl font-bold mt-4'>Portfolio Website</h2>
                <p>Membuat website portfolio pribadi menggunkan React JS, Tailwind CSS dan Vite.</p>
                <div className='flex justify-between mx-20 mt-6'>
                <SiReact size={40}/>
                <SiTailwindcss size={40}/>
                <SiVite size={40}/>
                </div>
            </div>
            <div className="embla__slide text-center">
                <img src={projek2} alt="p2" className='rounded-xl'/>
                <h2 className='text-xl font-bold mt-4 text-center'>Landing Page Website</h2>
                <p>Berkolaborasi membuat website landing page sebuah acara menggunkan React JS, Tailwind CSS dan Vite.</p>
                <div className='flex justify-between mx-20 mt-6'>
                <SiReact size={40}/>
                <SiTailwindcss size={40}/>
                <SiVite size={40}/>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}
