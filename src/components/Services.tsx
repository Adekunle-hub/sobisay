
import servicesData from "../../servicesData"

const Services = () => {
  return (
    <fieldset className='md:pt-[6rem] pt-[4rem] w-[90%] mx-auto'>
      <section className='flex flex-col items-center justify-center'>
        <div className='text-center py-[1rem]'>
          <h1 className='md:text-4xl text-3xl text-[#787878] pb-[1rem] font-semibold'>Explore Services</h1>
          <h3 className='md:text-3xl text-2xl font-semibold text-[#3b82f6]'> We Offer</h3>
        </div>
      </section>
        <section className='flex flex-col md:flex-row py-[2rem] gap-[1rem]'>

          {servicesData.map((data:any, index:number)=>{
            return (
            <div key={index} className='border-1 border-[#E0E0E0] flex rounded-2xl px-[2rem] pb-[2rem] gap-[5rem] justify-between flex-col'>
              <img src={data.image} className='w-[50px] pt-[2rem]' />      
            <div className='flex flex-col  bg-white'>
              <h1 className='text-3xl text-neutral-600 pb-[1rem]'>{data.content} </h1>
                <p className='text-left text-sm'>
                  {data.contentAbout}
                </p>
              </div>
            </div>
              )
          })}
         
        </section>
       
      
    </fieldset>
  )
}

export default Services
