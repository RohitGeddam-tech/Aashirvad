import React,{useState, useEffect} from 'react'
import Popup from './Popup'


const useForm = (validate) => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        mobile:'',
        select: '',
        textField: ''
    })
    const [errors, setErrors] = useState({})
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
        // console.log('Form name', value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        // if(errors){
        //     alert('Your Form is not Submitted');
        // } else if(!errors){
        //     alert('Your Form is Submitted');
        // }


        alert('form submitted')
        console.log('form values', values)
        // setIsSubmit(true);
        
    }

    return {handleChange, values, handleSubmit, errors}
}

export default useForm
