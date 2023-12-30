import React from "react";
import heroImage1 from '../assets/images/hero-img01.png';
import heroImage2 from '../assets/images/hero-img02.png';
import heroImage3 from '../assets/images/hero-img03.png';
import icon1 from '../assets/images/icon01.png';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png';
import {Link} from 'react-router-dom';
import {BiRightArrow} from 'react-icons/bi';
import About from "../components/about/About";
const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="heroSection pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* HERO CONTENT */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="textPara">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt rerum adipisci, praesentium quam eum expedita
                  asperiores? Voluptate, natus. Et eos accusamus, provident eius
                  rerum iure veniam placeat aliquid doloribus nobis.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/* HERO COUNTER */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                
              <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="textPara">Years of Experience</p>                  
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="textPara">Clinic Locations</p>                  
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                   100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="textPara">Patient Satisfaction</p>                  
                </div>
              </div>
            </div>
            {/* HERO CONTENT */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImage1} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImage2} alt="" className="w-full mb-[30px]" />
                <img src={heroImage3} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="textPara text-center">
              World-class care for everyone. Our health System offers unmatched ,expert health care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="flex flex-col items-center justify-center">
              <img src={icon1} alt="" />
            

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a doctor
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BiRightArrow className="group-hover:text-white w-6 h-5" />
              </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={icon2} alt="" />
            

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Location
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BiRightArrow className="group-hover:text-white w-6 h-5" />
              </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={icon3} alt="" />
            

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book Appointment
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BiRightArrow className="group-hover:text-white w-6 h-5" />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Services Section */}
      <section>
        <div className="container">
          
        </div>
      </section>
    </>
  );
};

export default Home;
