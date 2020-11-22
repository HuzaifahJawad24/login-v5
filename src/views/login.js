import React, { useState } from "react";

import TextField from "../components/textfield";
import Checkbox from "../components/checkbox";
import logo from "../logo.svg";
import UserIcon from "../icons/user-solid.svg";
import EyeIcon from "../icons/eye-solid.svg";
import EyeSlashIcon from "../icons/eye-slash-solid.svg";

import '../css/login.css'

const Login = props => {
    const [form, setForm] = useState({ email : "", password : "", remember_me : false});
    const [form2, setForm2] = useState({ show_password: false});

    function handleSubmit(event) {
        event.preventDefault();
        props.history.push( '/master/' );
    }

    const updateFormField = (e) => {
        const {name, value, checked, type} = e.target;
        let updatedValue = value
        
        switch (type) {
            case "checkbox" : {
                updatedValue = checked
                break
            }
            default:
        };

        setForm(prevForm => ({
            ...prevForm,
            [name] : updatedValue
        }))
    }

    const togglePasswordVisiblity = () => {
        setForm2(prevForm => ({
            ...prevForm,
            show_password: !form2.show_password
        }))
      };

    return (
        <div className="login-container">
            <div className="login-view">
                <img src="/login-background.png" alt="" className="login-img"/>
                <form onSubmit={handleSubmit} className="login-form">
                    <img className= "logo-img" src={logo} alt= "ES Logo" />
                    <TextField type ="email" label="Email Address" placeholder="Enter Email" name="email" value={form.email} onChange={updateFormField}>
                        <img src={UserIcon} className="input-icon" alt="" />
                    </TextField>
                    <TextField type ={form2.show_password ? "text" : "password"} label="Password" placeholder="Enter Password" name="password" value={form.password} onChange={updateFormField}>
                        <img src={form2.show_password ? EyeIcon : EyeSlashIcon} className="input-icon eye-icon" alt="" onClick={togglePasswordVisiblity} />
                    </TextField> 
                    <Checkbox labelClass="login-label" label="Remember me" name="remember_me" checked={form.remember_me} onChange={updateFormField} />
                    <button type="login" className={"btn btn-primary btn-login " + ((form.email !== '' && form.password !== '') ? '' : 'disabled')} disabled={(form.email !== '' && form.password !== '') ? false : true}>LogIn</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/#">password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
    
}

export default Login


