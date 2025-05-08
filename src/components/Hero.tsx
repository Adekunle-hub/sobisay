import heroImg from "/hero_img.png";

import "../../slider.css";
import MaxContainer from "./MaxContainer";

const Hero = () => {
  return (
    <>
      <MaxContainer>
        <section
          id="Home"
          className="flex pt-[3rem] flex-col md:flex-row mx-auto gap-[0.5rem] md:gap-[2rem] w-[90%] justify-between items-center "
        >
          <div className="max-w-[66rem] gap-[1rem] pt-[3rem]  ">
            <h1 className="text-[1.7rem] md:text-5xl text-center leading-9 riseUp md:text-left md:max-w-[40rem] font-medium md:font-bold md:py-3  py-1 md:leading-15">
              Grow Double,Tripple or even{" "}
              <span className="text-[#024866]">
                {" "}
                <span className="md:text-4xl text-2xl ">10</span>X Your Business
              </span>{" "}
              Online and Presence Fast
            </h1>
            <p className="text-center md:text-left md:text-lg md:w-[80%] text-xs md:mb-[2rem] mb-[0.5rem]">
              We create videos that engage your audience and drive traffic, as
              well as websites that convert those visitors into paying
              customers.
            </p>
            <div className="flex flex-col md:flex-row gap-[0.8rem] mt-[0.5rem] md:mt-[1rem] ">
              <a
                href="#Contact Us"
                className="bg-[#024866] py-2 px-3 text-center font-normal md:text-[1rem] md:py-1.5  md:px-[2rem] text-white rounded-3xl"
              >
                {" "}
                Take Charge
              </a>
              <a
                href="#Portfolio"
                className="bg-blue-400 font-normal text-center py-2 px-3 md:text-[1rem]  md:py-1.5  md:px-[2rem] text-white rounded-3xl"
              >
                {" "}
                View Portfolio
              </a>
            </div>
          </div>
          <div className="w-full mt-[2rem] mt:[0rem] slideLeft md:w-1/2">
            <img
              src={heroImg}
              className="w-full h-auto object-contain  max-h-96 "
            />
          </div>
        </section>
      </MaxContainer>
    </>
  );
};

export default Hero;
