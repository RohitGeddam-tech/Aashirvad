import React, {useState, useEffect} from 'react';
import './CSS/Services.css';
import line from './Photos/Line3.jpg';
import heart from './Photos/heart1.jpg';
import ServiceSlider from './ServiceSlider';
import ServiceMob from './ServiceMobSlider';

const List = () => {
    return(
        <div className='intro'>
            <div className='head'>
                <img src={line} alt='...' />
                <>
                    <h2 className='inthemiddle'> Services </h2>
                </>
                <img src={line} alt='...' />
            </div>
            <div className='paracontainer'>
                <p className='cent'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                </p>
            </div>
        </div>
    )
} 

const Mobile = () => {
    return(
        <div className='intro'>
            <div className='head'>
                
                <>
                    <h2 className='inthemiddle'> Services </h2>
                </>
                
            </div>
            <div className='paracontainer' style={{marginTop: '20px'}}>
                <p className='cent'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                </p>
            </div>
        </div>
    )
}

const DeskList = () => {
    return (
        <div className='disp'>
            <div className='dispscroll'>
                <div className='pic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='pic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='pic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='pic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='pic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='pic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
            </div>
        </div>
    )
}

const Moblist = () => {
    return (
        <div className='disp'>
            <div className='dispscroll'>
                <div className='mobpic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='mobpic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='mobpic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='mobpic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='mobpic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
                <div className='mobpic'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
            </div>
        </div>
    )
}

const Services = () => {

    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:770px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:770px)').matches)
        })
    })

    return (
        <div className='service'>
            {isMobile ? <Mobile /> : <List />}
            {isMobile ? <ServiceMob /> : <ServiceSlider />}
        </div>
    )
}

export default Services;

