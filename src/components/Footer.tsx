
import sobisayImage from "/image.webp"
import copyRight from "/copy_right.png"
import line from "/line_3.png"
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='pt-[7rem] w-90% mx-auto '>
      <div className='bg-[#F1F1F1] py-[4rem]'>
        <footer className='pb-[3rem] flex flex-col md:flex-row justify-between'>
            <div className='fex flex-col w-full md:w-[22rem] ' >
              <img src={sobisayImage} />
              <p className='text-sm py-[1rem]'> Sobisay Studio is a global platform dedicated to providing the best solutions for our customers in managing their operations.</p>
              <section className='flex pt-[2rem]  gap-[10px]'>
                  <FaWhatsapp />
                  <FaInstagram />
                  <FaLinkedin/>
                  <FaTwitter/>
                  <FaFacebook/>
              </section>
            
            </div>

            <article className='flex flex-row md:gap-[4rem] pt-[1rem] justify-between'>
                <div className='flex flex-col gap-[1rem]'>
                    <h1 className='md:text-xl text-base flex items-center gap-1 '> Services<span> <img src={line} /></span></h1>
                    <p className=' text-xs md:text-sm'>Websites Development</p>
                    <p className='text-xs md:text-sm'>Video Animations</p>
                    <p className='text-xs md:text-sm'>User Interface Design</p>
                  </div>

                  <div className='flex flex-col gap-[1rem]'>
                    <h1 className='md:text-xl text-base flex items-center  gap-1'>Company <span> <img src={line} /></span></h1>
                    <p className='text-xs md:text-sm'>About Us</p>
                    <p className='text-xs md:text-sm'>Contact Us</p>
                  </div>
            </article>
           

            <div className='flex flex-col'>
              <div className='flex pt-[1rem] gap-1'>
                <h1 className='md:text-xl  text-base '>Interested in our Newsletter? </h1>
                <p className='md:text-xl text-base '>Subscribe now</p>
              </div>
            
              <div className='flex flex-col gap-2 pt-[1.4rem]'>
                  <label htmlFor='email' className='md:text-base text-sm ' > Email Address </label>
                  <div className='flex bg-white justify-between px-[1rem] py-[0.5rem] rounded-3xl'>
                    <input 
                    id='email'
                    name='email'
                    placeholder='Email address'  className=' text-xs md:text-base' />
                    <button className='bg-blue-700 py-1 text-white text-xs px-3 md:scale-[0.8] rounded-2xl'>Submit</button>
              </div>
               
              </div>
            </div>
        </footer>
    
        
        <div className='flex w-[90%] md:items-start md:justify-start items-center justify-center border-t-1 text-[#9B9B9B] mx-auto py-[2rem]'>
        
        <span>
          <img src={copyRight} />
        </span>
        <p >
          All right reserved by Sobisay Studio
        </p>
        </div>
        
      </div>
    </section>
  )
}

export default Footer
