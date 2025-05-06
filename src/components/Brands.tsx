
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BrandImages from "../../BrandsData"
import "../../slider.css"

const Brands = () => {
 

  return (
    
      <section className=' py-[1rem]'>
        <div className='flex bg-blue-800 py-[3rem] items-center justify-center flex-col gap-[2rem]'>
          <h1 className=' text-3xl text-white font-semibold'>Brands We've Impacted</h1>
          <div className='w-full  overflow-hidden '>
            <div className='flex marquee w-max whitespace-nowrap'>
              {[...BrandImages, ...BrandImages].map((brand, index)=>(
                <div key={index} className='px-4 '>
                   <img src={brand.img}
                   className='w-[100px] h-[100px] object-cover rounded-xl'
                    />
                    <p className=' text-white text-sm py-[1rem] font-bold'>{brand.text}</p>
                </div>
              
              ))}
            </div>
          </div>
          
        </div>
       
      </section>
    
  )
}

export default Brands
