import React, { useState, useEffect } from 'react';
import './CSS/Header.css';
import { BsX } from 'react-icons/bs';
import logo from './Photos/logo.svg';
import { Link } from 'react-router-dom';
// import ReactModal from 'react-modal';
import useForm from './useForm';
import validate from './ValidateInfo';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

// ReactModal.setAppElement('#main');

const List = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-height:570px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-height:570px)').matches)
        })
    })

    const [isModal, setModal] = useState(false);

    const handleOpen = () => {
        setModal(true);
    };

    const handleClose = () => {
        setModal(false);
    };

    const { handleChange, values, handleSubmit, errors } = useForm(validate);
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
            
                { isMobile ? <div class="item mobbtn"> <Link to='/Aashirvad/Form'> <button class="ui button">
                    BOOK AN APPOINTMENT
                </button> </Link> </div> : 
                    <div class="item mobbtn"> 
                    <button class="ui button" onClick={handleOpen}>
                        BOOK AN APPOINTMENT
                    </button>
                    <Modal className='modal' open={isModal} onClose={handleClose}>
                        <div className='popup'>
                        
                        <h2>Book an appointment</h2>
                        <p>by filling in your details </p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='name'
                                name='name'
                                placeholder='Enter Your Name'
                                value={values.name}
                                onChange={handleChange}
                                required
                            />
                             {/* {errors.name && <h4 className='errorp'>{errors.name}</h4>}  */}
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Your Email'
                                value={values.email}
                                onChange={handleChange}
                                required
                            />
                             {/* {errors.email && <h4 className='errorp'>{errors.email}</h4>}  */}
                            <input
                                type='tel'
                                name='mobile'
                                placeholder='Enter Your Mobile No.'
                                value={values.mobile}
                                onChange={handleChange}
                                pattern='[0-9]{10}'
                                required
                            />
                             {/* {errors.mobile && <h4 className='errorp'>{errors.mobile}</h4>}  */}
                            <select name='select' value={values.select} required>
                                <option name='option' value={values.option}>Test & Packages</option>
                                <option name='option' value={values.option}>Blue</option>
                                <option name='option' value={values.option}>Bank</option>
                            </select>
                            <TextField
                                id="datetime-local"
                                type="datetime-local"
                                defaultValue="2020-05-24T10:30"
                                className={values.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div>
                                <button type='submit' className='ui button newbtn'>Submit</button>
                                <button onClick={handleClose} className='ui button cancelbtn'>Cancel</button>
                            </div>
                        </form>
                        <h3>OR</h3>
                        <h5 className='ptag'>Call Us at :<a href='tel:+919876509876' className='popupa'>+91 98765 09876</a></h5>
                        </div>
                    </Modal>
                </div>
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
                <Link style={{ marginTop: '25px' }} to='/Aashirvad/Contacts'>
                    <a onClick={()=>{setActive(!isActive)}} className='item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> Contact Us</a>
                </Link>
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

