import { StrictMode, useRef, RefObject } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ImagesDisplay from './components/ImagesDisplay'
import Brands from './components/Brands'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Clients from './components/Clients'


function Main(){
  const heroRef = useRef<HTMLElement>(null);
  const brandsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const clientRef = useRef<HTMLElement>(null);

  const scrollToSection = (section:string)=>{
    const sectionMap:{[key:string]: RefObject<HTMLElement | null>} = {
      Hero: heroRef,
      Brand: brandsRef,
      Services: servicesRef,
      Portfolio: portfolioRef,
      Clients: clientRef,
    }
   

    const ref = sectionMap[section];
    if(ref && ref.current){
      ref.current.scrollIntoView({behavior:"smooth"})
    }

  }
  

  return(
    <StrictMode>
    
    <Header onNavClick={scrollToSection} />
    <section ref={heroRef}><Hero /></section>
    <section > <ImagesDisplay/> </section>
    <section ref={brandsRef}> <Brands /> </section> 
    <section ref={servicesRef}> <Services /> </section>
    <section ref={portfolioRef}> <Portfolio /> </section>
    <section ref={clientRef}>  <Clients/> </section>
    <section > <Contact /> </section>
    
    <Footer />
  </StrictMode>
  )
}
createRoot(document.getElementById('root')!).render(<Main />)

// createRoot(document.getElementById('root')!).render(
  
//   <StrictMode>
    
//     <Header />
//     <Hero />
//     <ImagesDisplay />
//     <Brands />
//     <Services />
//     <Portfolio />
//     <Feedback/>
//     <Contact />
//     <Footer />
//   </StrictMode>,
// )
