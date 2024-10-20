import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/my.pic2.jpg)] bg-left lg:bg-[15%] bg-cover'
      style={{ backgroundSize: "35%"}}
    >
      <Navbar />
      <div className='container gridlg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-white'>
          <div>
            <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='pl-96 mt-10'>I'm</p>
            <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='pl-96 mt-10'>Abdul</p>
            <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='pl-96 mt-10'>Rafay</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Hero
