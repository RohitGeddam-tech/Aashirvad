import React, {useState, useEffect} from 'react';
import './CSS/Contacts.css';
import line from './Photos/Line2.jpg';
import call from './Photos/call1.jpg';
import email from './Photos/email1.jpg';
import location from './Photos/location1.jpg';

const Desktopfirst = () => {
    return(
        <div className='intro'>
        <div className='head'>
                <img src={line} alt='...' />
                <>
                    <h2 className='atthemiddle'> Contact Us </h2>
                </>
                <img src={line} alt='...' />
            </div>
            <div className='paracontainer'>
                <p className='inthecenter'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                </p>
            </div>
        </div>
    )
}

const Mobilefirst = () => {
    return (
        <div className='introduct'>
        <div className='head'>
                <>
                    <h2 className='atthemiddle'> Contact Us </h2>
                </>
            
            </div>
            </div>
    )
}

const Desksecond = () => {
    return(
        <div className='mainsheet'>
            <div className='imgsheet'>
                <a href='tel:++912226711340'><img className='sheetimg' src={call} /></a>
                <a href='mailto:webmaster@example.com'><img className='sheetimg' src={email} /></a>
                <a href='https://goo.gl/maps/mEUdamwgNEbd6Ddh8'><img className='sheetimg' src={location} /></a>
            </div>
            <div className='contentsheet'>
                <a href='tel:++912226711340' className='theheader'>+91 22 2671 1340</a>
                <a href='mailto:contact@aashirwadlabs.com' className='theheader'>contact@aashirwadlabs.com</a>
                <a href='https://goo.gl/maps/mEUdamwgNEbd6Ddh8' className='theheader'>
                   
                    Bldg No 108, Ground Floor, Heera Nav Jeevan Society, Pant Nagar, Ghatkopar (E), Mumbai, Maharashtra - 75
                    
                </a>
            </div>
        </div>
    )
}


const Mobsecond = () => {
    return(
        <div className='mainmobsheet'>
            <div className='imgmobsheet'>
                <a href='tel:++912226711340'><img className='sheetmobimg' src={call} /></a>
                <a style={{marginBottom:'10px'}} href='mailto:webmaster@example.com'><img className='sheetmobimg' src={email} /></a>
                <a style={{marginBottom:'15px'}} href='https://goo.gl/maps/mEUdamwgNEbd6Ddh8'><img className='sheetmobimg' src={location}/></a>
            </div>
            <div className='contentmobsheet'>
                <a href='tel:+912226711340' className='themobheader'>+91 22 2671 1340</a>
                <a style={{marginTop:'10px'}} href='mailto:contact@aashirwadlabs.com' className='themobheader'>contact@aashirwadlabs.com</a>
                <a style={{marginBottom:'15px'}} href='https://goo.gl/maps/mEUdamwgNEbd6Ddh8' className="themobheader">
                        Bldg No 108, Ground Floor, Heera Nav Jeevan Society, Pant Nagar, Ghatkopar (E), Mumbai, Maharashtra - 75
                </a>
            </div>
        </div>
    )
}

const Contacts = () => {

    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })

    return (
        <div className='msheet'>
            {isMobile ? <Mobilefirst /> : <Desktopfirst />}
            {isMobile ? <Mobsecond /> : <Desksecond />}
        </div>
    )
}

export default Contacts;