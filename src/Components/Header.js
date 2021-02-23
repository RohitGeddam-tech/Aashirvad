import React, { useState, useEffect } from 'react';
import './CSS/Header.css';
import { BsX } from 'react-icons/bs';
import logo from './Photos/logo.svg';
import { Link } from 'react-router-dom';
import Popup from './Popup'

// ReactModal.setAppElement('#main');
// const Contact = () => {
//     if(Link != (to='/Aashirvad')){
//     alert('this funtions only on the homepage so plase go to the homepage.')
//     }
// }

const List = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-height:570px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-height:570px)').matches)
        })
    })

    
    return (
        // <div style={style}>
        <div class="ui secondary  menu">
            {/* <Link style={{ marginTop: '8px' }} to='/Aashirvad/About'> */}
                <a href='/Aashirvad/About' class="item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    About Us
                    </a>
            {/* </Link> */}
            {/* <Link style={{ marginTop: '8px' }} to='/Aashirvad/Pathology'> */}
                <a href='/Aashirvad/Pathology' class="item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    Pathological Equipments
                    </a>
            {/* </Link> */}
            {/* <Link style={{ marginTop: '10px' }} to='/Aashirvad/Contacts'> */}
                <a href='#msheet' class="item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    Contact Us
                </a>
            {/* </Link> */}
            
                { isMobile ? <div class="item mobbtn"> <Link to='/Aashirvad/Form'> <button class="ui button">
                    BOOK AN APPOINTMENT
                </button> </Link> </div> : 
                   <div class="item mobbtn">  <Popup /> </div>
                }
        
        </div>
    )
}


/*  */

const MobileList = () => {
    const [isActive, setActive] = useState(false);
    return (
        <>
            <a
                className='big bars icon'
                onClick={() => {
                    setActive(!isActive);
                }}
            >
                {isActive ? <BsX size='35px' /> : <i className='large bars icon'></i>}
            </a>
            {isActive && <div className='navbtn'>
                <Link to='/Aashirvad/About' style={{ marginTop: '25px' }}>
                    <a onClick={()=>{setActive(!isActive)}} className='item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> About Us</a>
                </Link>
                <Link style={{ marginTop: '25px' }} to='/Aashirvad/Pathology'>
                    <a onClick={()=>{setActive(!isActive)}} className='item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> Pathological Equipments</a>
                </Link>
                {/* <Link style={{ marginTop: '25px' }} to='/Aashirvad/Contacts'>
                    <a onClick={()=>{setActive(!isActive)}} className='item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> Contact Us</a>
                </Link> */}
                <a href='#msheet' onClick={()=>{setActive(!isActive)}} class="item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    Contact Us
                </a>
                <div class="itembtn">
                    <Link style={{ marginTop: '25px' }} to='/Aashirvad/Form'>
                        <button onClick={()=>{setActive(!isActive)}} class="ui button">BOOK AN APPOINTMENT</button>
                    </Link>
                </div>
            </div>}
        </>
    )
}

const Intro = () => {
    return (
        <div className='brand-name'>
            <Link to='/Aashirvad'><img src={logo} /></Link>
        </div>
    )
}

// const Popup = () => {
//     return (
//         <div className='popup'>
//             <div>
//                 <img src={logo} />
//                 <BsX size='35px'/>
//             </div>
//             <form>
//                 <input type='name' placeholder='Enter Your Name' />
//                 <input type='email' placeholder='Enter Your Email' />
//                 <input type='tel' placeholder='Enter Your Mobile No.' />
//                 <select>
//                     <option>Books</option>
//                     <option>Blue</option>
//                     <option>Bank</option>
//                 </select>
//             </form>
//         </div>
//     )
// }

const Header = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-width:850px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width:850px)').matches)
        })
    })

    return (
        <header>
            <nav className='navbar navbar-secondary' style={{ width: '100%' }}>
                {isMobile ? <div className='Mobbrand-name'>
                    <Link to='/Aashirvad'><img src={logo} /></Link>
                </div> : <Intro />}
                {isMobile ? <MobileList /> : <List />}
            </nav>
        </header>
    )
}

export default Header;

