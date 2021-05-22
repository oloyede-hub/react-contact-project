import React from 'react'
import LoginUI from '../../layout/Login';
import useForm from './useForm';



const LoginContainer = () => {


    return (
        <div>
           <LoginUI form={useForm()} />
        </div>
    )
}

export default LoginContainer
