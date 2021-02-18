import React, {useState, useEffect} from 'react';
import './CSS/Header.css';
import {BsX} from 'react-icons/bs';
import logo from './Photos/logo.svg';
import {Link} from 'react-router-dom';

const List = () => {
    return (
            // <div style={style}>
                <div class="ui secondary  menu">
                    <Link style={{marginTop:'10px'}} to='/About'>
                    <a class="item itemname" style={{color: 'rgba(123, 127, 140, 0.5)'}}>
                        About Us
                    </a>
                    </Link>
                    <Link style={{marginTop:'10px'}} to='/Pathology'>
                    <a class="item itemname" style={{color: 'rgba(123, 127, 140, 0.5)'}}>
                        Pathological Equipments
                    </a>
                    </Link>
                    <Link style={{marginTop:'10px'}} to='/Contacts'>
                    <a class="item itemname" style={{color: 'rgba(123, 127, 140, 0.5)'}}>
                        Contact Us
                    </a>
                    </Link>
                    <div class="item mobbtn">
                        <Link>
                        <a class="ui button">BOOK AN APPOINTMENT</a>
                        </Link>
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
                <Link to='./About' style={{marginTop: '25px'}}>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> About Us</a>
                </Link>
                <Link style={{marginTop: '25px'}} to='./Pathology'>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Pathological Equipments</a>
                </Link>
                <Link style={{marginTop: '25px'}} to='./Contacts'>
                <a className='item itemname' style={{color: 'rgba(123, 127, 140, 0.5)'}}> Contact Us</a>
                </Link>
                <div class="itembtn">
                <Link style={{marginTop: '25px'}} to='./About'>
                    <a class="ui button">BOOK AN APPOINTMENT</a>
                </Link>
                </div>
            </div>}
        </>
    )
}

const Intro = () => {
    return(
        <div className='brand-name'>
            <Link to='/Aashirvad'><img src={logo}/></Link>
        </div>
    )
}

const Header = () => {
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:850px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:850px)').matches)
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

