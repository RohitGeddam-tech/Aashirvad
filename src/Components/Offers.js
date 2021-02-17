import React, { useEffect, useState } from 'react';
import './CSS/Offers.css';
import line from './Photos/Line2.jpg';
import SlickSlide from './Slickslide'; 
import Mobslide from './Mobslide';

const Intro = () => {
  return (
    <div className='intr'>
      <h2>Offers</h2>
      <img src={line} alt='...' />
    </div>
  )
}

const Newintro = () =>{
  return(
    <div className='mobintr'>
      <h2>Offers</h2>
    </div>
  )
}

const Offers = () => {

  const [isMobile, setMobile] = useState(
    window.matchMedia('(max-width:830px)').matches
  );
  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(window.matchMedia('(max-width:830px)').matches)
    })
  })

  return (
    <div className='sizpage'>
      {isMobile ? <Newintro /> : <Intro />}
      {/* {isMobile ? <Mobile /> : <MultiCarouselPage />} */}
      {isMobile ? <Mobslide /> : <SlickSlide />}
    </div>
  )
}


export default Offers;