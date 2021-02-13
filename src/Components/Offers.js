import React, { useEffect, useState } from 'react';
import './CSS/Offers.css';
import line from './Photos/Line2.jpg';
import SlickSlide from './Slickslide'; 

const Intro = () => {
  return (
    <div className='intr'>
      <h2>Offers</h2>
      <img src={line} alt='...' />
    </div>
  )
}

const Offers = () => {

  const [isMobile, setMobile] = useState(
    window.matchMedia('(max-width:800px)').matches
  );
  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(window.matchMedia('(max-width:800px)').matches)
    })
  })

  return (
    <div className='sizpage'>
      {isMobile ? <Intro /> : <Intro />}
      {/* {isMobile ? <Mobile /> : <MultiCarouselPage />} */}
      <SlickSlide />
    </div>
  )
}


export default Offers;