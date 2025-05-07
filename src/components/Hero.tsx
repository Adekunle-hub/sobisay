
import heroImg from "/hero_img.png"

const Hero = () => {
  return (
    <>
    <section className='flex pt-[8rem]  flex-col md:flex-row mx-auto gap-[0.5rem] md:gap-[2rem] w-[90%] justify-between items-center '>
      <div className='max-w-[66rem] gap-[1rem]  '>
        <h1 className='text-[1.8rem] md:text-5xl text-center leading-12 md:text-left md:max-w-[40rem] font-medium md:font-bold py-3 md:leading-17'>
          Grow Double,Tripple or even <span className='text-[#024866]'> <span className='md:text-4xl text-2xl '>10</span>X Your Business</span> Online and Presence Fast
        </h1>
        <p className='text-center md:text-left md:text-lg md:w-[80%] text-sm mb-[2rem]'>
        We create videos that engage your audience and drive traffic, as well as websites that convert those visitors into paying customers.
        </p>
        <div className='flex flex-col md:flex-row gap-[0.8rem] mt-[0.5rem] md:mt-[1rem] '>
          <button className='bg-[#024866] p-3 font-normal md:text-[1rem] md:py-1.5  md:px-[2rem] text-white rounded-3xl'> Take Charge</button>
          <button className='bg-blue-400 font-normal p-3 md:text-[1rem]  md:py-1.5  md:px-[2rem] text-white rounded-3xl'> View Portfolio</button>
        </div>
      </div>
      <div className='w-full mt-[2rem] mt:[0rem] md:w-1/2'>
          <img src={heroImg} className='w-full h-auto object-contain max-h-96 '  />
      </div>
    </section>
      
    </>
  )
}

export default Hero

