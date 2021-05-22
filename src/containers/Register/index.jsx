import React from 'react'
import RegisterUI from '../../layout/Register';
import useForm from './useForm';



const RegisterContainer = () => {


    return (
        <div>
           <RegisterUI form={useForm()} />
        </div>
    )
}

export default RegisterContainer
