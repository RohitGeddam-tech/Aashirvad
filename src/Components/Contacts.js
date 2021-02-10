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
                <img src={line} alt='...' />
                <>
                    <h2 className='atthemiddle'> Contact Us </h2>
                </>
                <img src={line} alt='...' />
            </div>
            </div>
    )
}

const Desksecond = () => {
    return(
        <div className='mainsheet'>
            <div className='imgsheet'>
                <img className='sheetimg' src={call} />
                <img className='sheetimg' src={email} />
                <img className='sheetimg' src={location} />
            </div>
            <div className='contentsheet'>
                <span class="theheader">+91 22 2671 1340</span>
                <span class="theheader">contact@aashirwadlabs.com</span>
                <p class="theheader">Bldg No 108, Ground Floor, Heera Nav Jeevan Society, Pant Nagar, Ghatkopar (E), Mumbai, Maharashtra - 75</p>
            </div>
        </div>
    )
}

const Mobsecond = () => {
    return(
        <div className='mainmobsheet'>
            <div className='imgmobsheet'>
                <img className='sheetmobimg' src={call} />
                <img className='sheetmobimg' src={email} />
                <img className='sheetmobimg' src={location} />
            </div>
            <div className='contentmobsheet'>
                <span class="themobheader">+91 22 2671 1340</span>
                <p class="themobheader">contact@aashirwadlabs.com</p>
                <p class="themobheader">Bldg No 108, Ground Floor, Heera Nav Jeevan Society, Pant Nagar, Ghatkopar (E), Mumbai, Maharashtra - 75</p>
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