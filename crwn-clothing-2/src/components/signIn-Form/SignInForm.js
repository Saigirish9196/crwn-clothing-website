import React, {  useState } from 'react'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './signIn.style.scss'
import { signInaction } from '../../actions/actions';
import {  useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.action';


const defaultFormFields = {
    email: '',
    password: '',
  };


const SignInForm = () => {
  
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {email,password} = formFields
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
    
      console.log(userInfo);
    },
  });

  
  
  const handleSubmit = async e =>{
      e.preventDefault();
      signInaction({username:email,password}).then(data =>{
        if(data.error){
            console.log(data.error);
            alert(data.error)
        }else{
          dispatch(setCurrentUser(data.user))      
            setFormFields(defaultFormFields)
        }
      })
  }

  const handleChange = e =>{
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className='sign-in-container'>
        <h2>I already have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        
        <div className='sign-in-button'>  
            <Button type='submit'>SIGN IN</Button>
            <Button type='button' onClick={()=>login()} buttonType='google' >GOOGLE SIGN IN</Button>
          
        </div>
        
      </form>

    </div>
  )
}

export default SignInForm










 // eslint-disable-next-line no-lone-blocks
 {/* 769634087585-a37dj6f8qcvdalqip0gn7ptn1ljs1bfs.apps.googleusercontent.com */}