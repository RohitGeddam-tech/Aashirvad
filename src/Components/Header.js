import React, { useState, useEffect } from 'react';
import './CSS/Header.css';
import { BsX } from 'react-icons/bs';
import logo from './Photos/logo.svg';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import useForm from './useForm';
import { validateYupSchema } from 'formik';
import validate from './ValidateInfo';

const List = () => {
    const [isModal, setModal] = useState(false);
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    return (
        // <div style={style}>
        <div class="ui secondary  menu">
            <Link style={{ marginTop: '10px' }} to='/Aashirvad/About'>
                <a class="item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    About Us
                    </a>
            </Link>
            <Link style={{ marginTop: '10px' }} to='/Aashirvad/Pathology'>
                <a class="item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    Pathological Equipments
                    </a>
            </Link>
            <Link style={{ marginTop: '10px' }} to='/Aashirvad/Contacts'>
                <a class="item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    Contact Us
                    </a>
            </Link>
            <div class="item mobbtn">
                <button class="ui button" onClick={() => { setModal(true) }}>
                    BOOK AN APPOINTMENT
                </button>
                <Modal className='modal' isOpen={isModal}>
                    <div className='popup'>
                        <div className='topline'>
                            <img src={logo} />
                            <BsX size='35px' onClick={() => { setModal(false) }} style={{cursor:'pointer', marginLeft:'40px'}} />
                        </div>
                        <h2>Book an appointment</h2>
                        <p>by filling in your details </p>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type='name' 
                                name='name' 
                                placeholder='Enter Your Name' 
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <h4 className='errorp'>{errors.name}</h4>}
                            <input 
                                type='email' 
                                name='email' 
                                placeholder='Enter Your Email' 
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <h4 className='errorp'>{errors.email}</h4>}
                            <input 
                                type='tel' 
                                name='mobile' 
                                placeholder='Enter Your Mobile No.'
                                value={values.mobile} 
                                onChange={handleChange}
                                pattern='[0-9]{10}'
                            />
                            {errors.mobile && <h4 className='errorp'>{errors.mobile}</h4>}
                            <select>
                                <option>Test & Packages</option>
                                <option>Blue</option>
                                <option>Bank</option>
                            </select>
                            <input />
                            <button type='submit' className='ui button newbtn'>Submit</button>
                        </form>
                        <h3>OR</h3>
                        <h5 className='ptag'>Call Us at :<a href='tel:+919876509876' className='popupa'>+91 98765 09876</a></h5>
                    </div>
                </Modal>
            </div>
        </div>
        // </div>
    )
}

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
                    <a className='item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> About Us</a>
                </Link>
                <Link style={{ marginTop: '25px' }} to='/Aashirvad/Pathology'>
                    <a className='item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> Pathological Equipments</a>
                </Link>
                <Link style={{ marginTop: '25px' }} to='/Aashirvad/Contacts'>
                    <a className='item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> Contact Us</a>
                </Link>
                <div class="itembtn">
                    <Link style={{marginTop: '25px'}} to='/Aashirvad/Form'>
                    <button class="ui button">BOOK AN APPOINTMENT</button>
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

