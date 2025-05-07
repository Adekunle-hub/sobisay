
import galleryImage1 from "/gallery_img_1.png"
import galleryImage2 from "/gallery_img-2.png"
import MaxContainer from "./MaxContainer"

const ImagesDisplay = () => {
  return (
    <>

      
      <MaxContainer>
      <section className='flex w-[90%] snap-x snap-mandatory scroll-smooth  md:flex-row overflow-x-auto whitespace-nowrap md:overflow-visible md:whitespace-normal pt-[6rem] md:pb-[5rem] pb-[3rem] mx-auto gap-[2rem] md:mt-[8rem]'>
      <img src={galleryImage1} className='inline-block snap-start min-w-[80%] md:min-w-[45%]' />
       
       <img src={galleryImage2} className='inline-block snap-start min-w-full md:min-w-[55%] ' />
       </section>
      </MaxContainer>
       
      
    </>
  )
}

export default ImagesDisplay
