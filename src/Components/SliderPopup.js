import React,{useState} from 'react'
import useForm from './useForm';
import validate from './ValidateInfo';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';


const Popup = () => {
    const [isModal, setModal] = useState(false);
    // const [select, setSelect] = useState('');

    const handleOpen = () => {
        setModal(true);
    };

    const handleClose = () => {
        setModal(false);
    };
    const [errors, setErrors] = useState({})

    const { handleChange, values } = useForm(validate);

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        if(!values.name, !values.email, !values.mobile, !values.select, !values.textField){
            alert('fill in the values')
        }else if(values.name, values.email, values.mobile, values.select, values.textField){
            alert('form submitted');
            setModal(false)
        }
    }

    return(
        <div> 
                    <button className='ui button btnrea' onClick={handleOpen}>Book Now</button>
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
                                // required
                            />
                            {errors.name && <h4 className='errorp'>{errors.name}</h4>} 
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Your Email'
                                value={values.email}
                                onChange={handleChange}
                                // required
                            />
                            {errors.email && <h4 className='errorp'>{errors.email}</h4>} 
                            <input
                                type='tel'
                                name='mobile'
                                placeholder='Enter Your Mobile No.'
                                value={values.mobile}
                                onChange={handleChange}
                                pattern='[0-9]{10}'
                                // required
                            />
                            {errors.mobile && <h4 className='errorp'>{errors.mobile}</h4>} 
                            {/* <select name='select' value={values.select} required>
                                <option name='option' value={values.option}>Test & Packages</option>
                                <option name='option' value={values.option}>Blue</option>
                                <option name='option' value={values.option}>Bank</option>
                            </select> */}
                            {/* {console.log(select)} */}
                            <select name='select'
                            defaultValue={values.select}
                            onChange={handleChange}
                            // required
                            >
                                <option value=''>Test & Packages</option>
                                <option value='Blue'>Blue</option>
                                <option value='Bank'>Bank</option>
                            </select>
                            {errors.select && <h4 className='errorp'>{errors.select}</h4>} 
                            <TextField
                                id="datetime-local"
                                type="datetime-local"
                                value={values.textField}
                                name='textField'
                                className={values.textField}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {errors.textField && <h4 className='errorp'>{errors.textField}</h4>} 
                            <div>
                                <button type='submit' className='ui button newbtn'>Submit</button>
                            </div>
                        </form>
                        <h3>OR</h3>
                        <h5 className='ptag'>Call Us at :<a href='tel:+919876509876' className='popupa'>+91 98765 09876</a></h5>
                        </div>
                    </Modal>
                </div>
    )
}

export default Popup;