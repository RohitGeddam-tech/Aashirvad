import React from 'react'



const ValidateInfo = (values) => {
    let errors = {}

    if(!values.name.trim()){
        errors.name = 'This field is required'
    }

    if(!values.email.trim()){
        errors.email = 'This field is required'
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'The Email entered is Invalid'
    }

    if(!values.mobile.trim()){
        errors.mobile = 'This field is required'
    }else if(!/[0-9]{10}/.test(values.mobile)){
        errors.mobile = 'The Mobile no. entered is Invalid'
    }

    if(!values.select.trim()){
        errors.select = 'This field is required'
    }

    if(!values.textField.trim()){
        errors.textField = 'This field is required'
    }

    return errors;
}

export default ValidateInfo
