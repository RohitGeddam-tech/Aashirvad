import React, { useState } from 'react'
import logo from './Photos/logo.svg';
import useForm from './useForm';
import validate from './ValidateInfo';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const Form = () => {

    const { handleChange, values, handleSubmit, errors } = useForm(
        validate
    );

    return (
        <div className='form'>
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
                    {/* {errors.name && <h4 className='errorp'>{errors.name}</h4>} */}
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter Your Email'
                        value={values.email}
                        required
                        onChange={handleChange}
                    />
                    {/* {errors.email && <h4 className='errorp'>{errors.email}</h4>} */}
                    <input
                        type='tel'
                        name='mobile'
                        placeholder='Enter Your Mobile No.'
                        value={values.mobile}
                        onChange={handleChange}
                        pattern='[0-9]{10}'
                        required
                    />
                    {/* {errors.mobile && <h4 className='errorp'>{errors.mobile}</h4>} */}
                    <select required>
                        <option value=''>Test & Packages</option>
                        <option value='Blue'>Blue</option>
                        <option value='Bank'>Bank</option>
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
                        <Link to='/Aashirvad'>
                        <button className='ui button cancelbtn'>Cancel</button>
                        </Link>
                    </div>
                </form>
                <h3>OR</h3>
                <h5 className='ptag'>Call Us at :<a href='tel:+919876509876' className='popupa'>+91 98765 09876</a></h5>
            </div>
        </div>
    )
}

export default Form
