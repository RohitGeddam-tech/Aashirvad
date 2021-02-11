import React, {useState, useEffect} from 'react';
import './CSS/Header.css';

const List = () => {
    return (
            // <div style={style}>
                <div class="ui secondary  menu">
                    <a class="item itemname" style={{color: 'rgba(123, 127, 140, 0.5)'}}>
                        About Us
                    </a>
                    <a class="item itemname" style={{color: 'rgba(123, 127, 140, 0.5)'}}>
                        Pathological Equipments
                    </a>
                    <a class="item itemname" style={{color: 'rgba(123, 127, 140, 0.5)'}}>
                        Contact Us
                    </a>
                    <div class="item mobbtn">
                        <button class="ui button">BOOK AN APPOINTMENT</button>
                    </div>
                </div>    
            // </div>
        )
}

const MobileList =()=>{
    const [isActive, setActive] = useState(false);
    return(
        <>
            <a
                className='big bars icon'
                onClick={()=>{
                    setActive(!isActive);
                }}
            >
                {isActive ? <i className='big x icon'></i> : <i className='large bars icon'></i>}
            </a>
            {isActive && <div className='navbtn'>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)' }}> About Us</a>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Services</a>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Pathological Equipments</a>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Contact Us</a>
                <div class="itembtn">
                    <button class="ui button">BOOK AN APPOINTMENT</button>
                </div>
            </div>}
        </>
    )
}

const MobList=()=>{
    const [isClicked, setClicked] = useState(false);
    return(
        <>
            <a
                className='big bars icon'
                onClick={()=>{
                    setClicked(!isClicked);
                }}
            >
                {isClicked ? <i className='big x icon'></i> : <i className='big bars icon'></i>}
            </a>
            {isClicked && <div className='navmobbtn'>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)' }}> About Us</a>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Services</a>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Pathological Equipments</a>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Contact Us</a>
                <div class="itembtn">
                    <button class="ui button">BOOK AN APPOINTMENT</button>
                </div>
            </div>}
        </>
    )    
}

const Header = () => {
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })

    // const[isView, setView] = useState(
    //     window.matchMedia('(max-width:404px)').matches
    // );
    // useEffect(()=>{
    //     window.addEventListener('resize', ()=>{
    //         setView(window.matchMedia('(max-width:404px)').matches)
    //     })
    // })

    return (
        <header>
            <nav className='navbar navbar-secondary' style={{width: '100%'}}>
                <div className='brand-name'>
                    <a href='#'>AASHIRVAD <a className='a1' href='#'>LAB</a></a>
                </div>
                {isMobile ? <MobileList /> : <List />}
            </nav>
        </header>
    )
}

export default Header;

