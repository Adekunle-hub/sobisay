

import { StrictMode} from 'react'
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


  const scrollToSection = (section:string)=>{
 
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

  }
  

  return(
    <StrictMode>
    
    <Header onNavClick={scrollToSection} />
    <section > <Hero /> </section>
    <section > <ImagesDisplay/> </section>
    <section> <Brands /> </section> 
    <section> <Services /> </section>
    <section> <Portfolio /> </section>
    <section>  <Clients/> </section>
    <section > <Contact /> </section>
    
    <Footer />
  </StrictMode>
  )
}
createRoot(document.getElementById('root')!).render(<Main />)



