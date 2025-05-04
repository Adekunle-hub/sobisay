import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ImagesDisplay from './components/ImagesDisplay'
import Brands from './components/Brands'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import Footer from './components/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
    <ImagesDisplay />
    <Brands />
    <Services />
    <Portfolio />
    <Feedback/>
    <Contact />
    <Footer />
  </StrictMode>,
)
