import  { useEffect, useState } from 'react'
import sobisayImage from "/image.webp"
import Buttons from './Button'
import HamBurger from "/hamburger.png"



const Header = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState<boolean | null>(null)

 

 
  useEffect(()=>{
    const checkScreenSize = ()=>{
      const width = window.innerWidth
      setIsMobile(width < 768)
      
    }
   checkScreenSize()

    window.addEventListener('resize', checkScreenSize)

    return ()=>{window.removeEventListener('resize', checkScreenSize)}
  },[])

    let navBarContents:string[] = [
    "Home", "Brand", "Services", "Portfolio", "Clients"
  ]
  
 function handleMobileView(){
  {isMobile &&
  setMenuOpen(prevState => !prevState)
  }
 }

  return (
    <nav className="pt-[1.5rem] z-20 fixed top-0 left-0 w-full bg-[#F1F1F1] pb-[1.5rem]">
      <section className='md:flex w-[90%] mx-auto relative items-center justify-between '>
        <div >
          <img src={sobisayImage} className='scale-[0.7] h-auto' />
        </div>
    
        <div className={`md:flex pl-[2rem] md:static items-center justify-center w-screen pt-[4rem] md:pt-[0] md:w-auto  fixed right-0 z-4 transition-all duration-200 ease-in 
        ${isMobile 
          ? (menuOpen ? 'top-0' : 'top-[-400px]')
          :""
        }`}>
          <Buttons contents={navBarContents} />
          <button className='bg-blue-500 text-white rounded-3xl px-[3rem] md:px-[1rem] mt-6 py-[0.5rem] mb-[1rem] md:mt-[0] whitespace-nowrap md:ml-[2rem]'> 
            Contact Us
          </button>
        </div>
        <div className=' absolute top-3 right-0 z-[5] md:hidden cursor-pointer'>
          <img src={HamBurger}
          onClick={handleMobileView}
          />
        </div>
      </section>
    
    </nav>

  )
}

export default Header;
