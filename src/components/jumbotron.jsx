import home from '../assets/home.png'

const jumbotron = () => {
  return (
    <section id="tentang" className="h-[110vh] pt-20 md:pt-40"> 
      <div className="md:flex justify-between pt-6">
        <img src={home} alt="home" width={300} className='mx-auto md:ml-20'/>
        <div className='text-center mt-10'>
          <h2 className='font-bold text-2xl text-gray-800 md:text-4xl' ><span className='text-cyan-800'>Adit</span>ya Ridho Nugroho</h2>
          <h3 className='mt-2 font-medium'>Front-End Web Developer</h3>
          <p className='mt-2 mx-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae facilis possimus, illum autem, hic enim nostrum veniam quam perspiciatis placeat, ea perferendis. Veniam modi ipsum rerum molestiae ut incidunt?</p>
        </div>
      </div>


    </section>
)
}

export default jumbotron