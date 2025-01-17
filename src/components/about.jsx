import React from 'react'
import home from "../assets/first.png";


const about = () => {
  return (
        <div className='pt-20' id='about'>
          <div className="mx-auto max-w-[320px] md:max-w-[90%] md:flex md:flex-row pt-10 justify-center items-center">
            <img src={home} alt="tentang" className='w-full md:w-[30%]' />
            <div className="mt-4 md:mt-0 md:ml-6 bg-[#FCDA68] md:p-12 p-6 text-gray-900 md:rounded-e-3xl rounded-b-3xl">
              <h2 className="font-bold text-lg md:text-2xl">
             Tentang Saya...
              </h2>
              <p className=" md:text-base text-sm my-4">Halo, saya Aditya Ridho, seorang mahasiswa semester 4 Program Studi Informatika Institut Teknologi Kalimantan. Dengan minat yang mendalam di bidang <span className='italic'>UI/UX Design, Web Development,</span> dan <span className='italic'>Internet of Things (IoT),</span> saya telah menjadikan teknologi sebagai bagian dari passion saya untuk menciptakan solusi kreatif. Minat ini didukung dengan pengalaman saya selama masa kuliah dengan beberapa projek. Jika Anda mencari seseorang yang berpikir out of the box dan selalu siap menerima tantangan baru, Anda bertemu dengan orang yang tepat. Mari bekerja sama!</p>
              <div className="flex flex-col md:flex-row gap-4">
                <a 
                  href="#footer" 
                  className="md:p-4 p-3 md:w-[20%] w-[45%] md:text-base text-sm rounded-xl hover:bg-[#4832c2] font-semibold bg-[#8773FE] text-white duration-200"
                >
                  Kontak Saya
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default about