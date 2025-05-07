
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BrandImages from "../../BrandsData"
import "../../slider.css"
import MaxContainer from './MaxContainer';

const Brands = () => {
 

  return (
    
        <section id='Brand' className=' '>
        <MaxContainer >
          <div className="bg-[#024866]">
          <div className='flex  py-[3rem] items-center justify-center flex-col gap-[2.5rem]'>
        
        <h1 className=' text-3xl text-white font-semibold'>Brands We've Impacted</h1>
        
        <div className='w-auto overflow-hidden '>
          <div className='flex  marquee w-max whitespace-nowrap'>
            {[...BrandImages, ...BrandImages].map((brand, index)=>(
              <div key={index} className='px-4 flex flex-col items-center'>
                 <img src={brand.img}
                 className='w-[100px] h-[100px] object-cover rounded-xl'
                  />
                  <p className=' text-white whitespace-normal max-w-[150px] text-center text-sm py-[1rem] font-bold'>{brand.text}</p>
              </div>
            
            ))}
          </div>
       
          
        </div>
       
        
      </div>
          </div>
       
        </MaxContainer>
       
      </section>
    
      
    
  )
}

export default Brands
