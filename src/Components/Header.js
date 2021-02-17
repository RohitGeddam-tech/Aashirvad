import React, {useState, useEffect} from 'react';
import './CSS/Header.css';
import {BsX} from 'react-icons/bs';
import logo from './Photos/logo.svg';

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
                        <a class="ui button">BOOK AN APPOINTMENT</a>
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
                {isActive ? <BsX size='35px'/> : <i className='large bars icon'></i>}
            </a>
            {isActive && <div className='navbtn'>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> About Us</a>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Pathological Equipments</a>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Contact Us</a>
                <div class="itembtn">
                    <a class="ui button">BOOK AN APPOINTMENT</a>
                </div>
            </div>}
        </>
    )
}

const Intro = () => {
    return(
        <div className='brand-name'>
            <img src={logo}/>
        </div>
    )
}

const Header = () => {
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:770px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:770px)').matches)
        })
    })


    return (
        <header>
            <nav className='navbar navbar-secondary' style={{width: '100%'}}>
                {isMobile ? <div className='Mobbrand-name'>
                    <img src={logo}/>
                </div> : <Intro />}
                {isMobile ? <MobileList /> : <List />}
            </nav>
        </header>
    )
}

export default Header;

