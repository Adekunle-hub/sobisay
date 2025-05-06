import  { useState } from 'react'
import { webDevelopment, videoCreatives } from '../PortfolioData'


const Portfolio = () => {
  const [toggleDisplay, setToggleDisplay] = useState('option1');
  const handleClick = (option:string) => setToggleDisplay(option)
  return (
    
    <>
      <section className=' md:pt-[10rem]   pt-[1rem] pb-[3rem] flex items-center flex-col justify-center mx-auto w-[90%]'>
        <h1 className='md:pb-[3rem] pb-[1rem] text-[2rem] md:text-[3rem] font-medium text-blue-950'> Portfolio</h1>
        <div className='bg-slate-300 flex gap-[10px] md:rounded-[6rem]  rounded-4xl md:gap-[3rem] md:py-3 py-2 px-3 md:px-4 '>
          <button className={`text-sm  md:text-base text-[#858585] px-4 py-1 md:py-3 md:px-10 font-medium cursor-pointer  ${toggleDisplay ==='option1'
              ? "bg-blue-600 text-white rounded-xl md:rounded-3xl  "
              : ""
            }`
           
          }
          onClick={()=>{handleClick('option1')}}
          >Web Development</button>
          <button className={`text-sm md:text-base text-[#858585] md:py-3 py-1 px-4 md:px-10  font-medium  cursor-pointer
          ${toggleDisplay === 'option2'
            ? "bg-blue-600 text-white  rounded-3xl "
            : ""
          }
          `}
          onClick={()=>{handleClick('option2')}}
          > Video Creatives</button>
        </div>
    </section>
    <section className='grid grid-cols-1 md:pb-[4rem] pb-[3rem]  md:grid-cols-3 gap-[1rem]  w-[90%] mx-auto'>
      {toggleDisplay ==='option1' && webDevelopment?.map((data,index)=>(
           <div key={index} className='border-1 border-[#ECECEC] p-5 py-[1rem] rounded-2xl '>
            <div className='relative'>
              <img src={data.image} className='w-full rounded-xl  h-[40vh] max-h-[24rem] object-cover  ' />
              <img src={data.arrow} className='absolute cursor-pointer -bottom-2 -right-4 bg-blue-700 rounded-[50%] p-2'/>
            </div>
             
             <h1 className='md:py-4 py-3 text-xl'> {data.name}</h1>
             <p className='md:text-base text-sm'>{data.about}</p>
         </div>
         ))}  

        {toggleDisplay === 'option2' && videoCreatives.map((videoData, index)=>(
          <div key={index} className='border-1 border-[#ECECEC] p-5 py-[1rem] rounded-2xl '>
          <div className='relative'>
            <img src={videoData.video} className='w-full rounded-xl h-[40vh] max-h-[24rem] object-cover  ' />
          
          </div>
           
           <h1 className='md:py-4 py-3 text-xl'> {videoData.channelName}</h1>
           <p className='md:text-base text-sm'>{videoData.about}</p>
       </div>

        )) } 
    </section>
    
    </>
 
  )
}

export default Portfolio
