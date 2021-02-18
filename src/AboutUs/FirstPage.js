import React, {useState, useEffect} from 'react';
import './CSS/FirstPage.css';
import flag from './Photos/flag.svg';
import vision from './Photos/vision.svg';

const Intro = ()=>{
    return(
        <div className='Title'>
            About Us
        </div>
    )
}

const Desktop =()=>{
    return(
        <div className='outerbox'>
            <div className='innerbox1'>
                <img style={{marginTop:'30px'}} src={flag}/>
                <h2 className='boxtitle'>OUR MISSION</h2>
                <p className='boxtext'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </p>
            </div>
            <div className='dashed'></div>
            <div className='innerbox2'>
                <img style={{marginTop:'30px'}} src={vision}/>
                <h2 className='boxtitle'>OUR vision</h2>
                <p className='boxtext'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </p>
            </div>
        </div>
    )
}

const Mobile=()=>{
    return(
        <div className='outermobbox'>
            <div className='innermobbox1'>
                <img style={{marginTop:'30px', width:'75px', height:'75px'}} src={flag}/>
                <h2 className='boxtitle'>OUR MISSION</h2>
                <p className='boxtext'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </p>
            </div>
            <div className='mobdashed'></div>
            <div className='innermobbox2'>
                <img style={{marginTop:'30px', width:'75px', height:'75px'}} src={vision}/>
                <h2 className='boxtitle'>OUR vision</h2>
                <p className='boxtext'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </p>
            </div>
        </div>
    )
}

const FullPage = () => {
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })

    return(
        <div className='FirstPage'>
            {isMobile ? <div className='hello'>hello</div> : <Intro />}
            {isMobile ? <Mobile />: <Desktop />}
        </div>
    )
}

export default FullPage;