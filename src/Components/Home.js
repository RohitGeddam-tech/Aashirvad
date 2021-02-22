
import React, { useState, useEffect } from 'react';
import './CSS/Home.css';
import cover from './Photos/cover1.jpg';
import cover2 from './Photos/cover2.jpg';
import HomeSlide from "./HomeSlide";
import useForm from './useForm';
import validate from './ValidateInfo';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

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
        <div className='det'>
            <h1 className='h'>Banner Title</h1>
            <div className='tir'>
                <p className="lead p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                </p>
                { isMobile ? <div class="item vb"> <Link to='/Aashirvad/Form'> <button class="ui button">
                    BOOK AN APPOINTMENT
                </button> </Link> </div> : 
                    <div class="item vb"> 
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
        </div>
    )
}

const MobList = () => {
    return (
        <div className='backimg'>
            <img className='firstimg' src={cover} />
        </div>
    )
}

const Home = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })
    return (
        <div className='firstpage'>
            
                {isMobile ? <div className='backimg'>
                    <img className='firstimg' src={cover2} />
                    </div>
                    : <MobList />}
                {isMobile ? <HomeSlide /> : <List />}
            
        </div>
    )
}

export default Home;
