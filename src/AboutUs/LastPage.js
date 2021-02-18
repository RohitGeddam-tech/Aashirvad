import React,{useEffect, useState} from 'react';
import './CSS/LastPage.css';
import line from './Photos/Line2.jpg';
import lastimg from './Photos/lastpage.svg';
import Slider from './Slider';

const Desktop =()=>{
    return(
        <div className='lastbox'>
            <div className='lastbox1'>
                <div className='dispscroll'>
                <img className='lastimg' src={lastimg}/>
                <img className='lastimg' src={lastimg}/>
                <img className='lastimg' src={lastimg}/>
                </div>
            </div>
        </div>
    )
}

const Intro = () => {
    return(
        <div>
            <h2 className='lastboxtitle'>CERTIFICATES & ACCOMPLISHMENTS  <img className='mobline' src={line} alt='...' /> </h2>
        </div>
    )
}

const NewIntro = () => {
    return(
        <div>
            <h2 className='newboxtitle'>CERTIFICATES & ACCOMPLISHMENTS </h2>
        </div>
    )
}

const LastPage =()=>{
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })

    return(
        <div className='LastPage'>
            {isMobile ? <NewIntro /> : <Intro />}
            {isMobile ? <Slider /> : <Desktop />}
        </div>
    )
}

export default LastPage;