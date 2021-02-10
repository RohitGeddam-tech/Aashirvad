import './CSS/AboutUs.css';
import React, { useState, useEffect } from 'react';
import line from './Photos/Line2.jpg';
import scrn from './Photos/offers.jpg';

const List = () => {
    return (
        <div className='imgbox'>
            <img className='boximg' src={scrn} />
        </div>
    )
}

const MobList = () => {
    return (
        <div className='contentbox'>
            <div className='texttitle'>
                <h3 className='h'>About us <img className='mobline' src={line} alt='...' /> </h3>
            </div>
            <p className='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='btnbox'>
                <a className='ui button btnread'>Read More</a>
            </div>
        </div>
    )
}


const AboutUs = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })
    return (
        <div className='firstus'>
            {isMobile ? <div className='Mobcontentbox'>
            <div className='texttitle'>
                <h3 className='mobh'>About us <img className='mobline' src={line} alt='...' /> </h3>
            </div>
            <p className='mobp'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='mobbtnbox'>
                <a className='ui button mobbtnread'>Read More</a>
            </div>
            <div className='mobimgbox'>
            <img className='mobboximg' src={scrn} alt='...'/>
            
            </div>
        </div> : <List />}
            {/* in desktop version <list /> from first ismobile state and <moblist /> from ismobile 2 will be accessed
            and in mobile view the opposite will happen*/}
            {isMobile ? <h1 className='hello'>hello</h1> : <MobList />}
        </div>
    )
}

export default AboutUs;

{/* <div className='mobsecbox'>
                <img className='mobfirstimg' src={firstcircle} alt='...'/>
                <img className='mobboximg' src={secondcircle} alt='...'/>
            </div> */}