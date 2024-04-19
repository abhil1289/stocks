import { Email, Password } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const LogIn = () => {
  const[data,setData] = useState({
    email:'',
    password:''
  })
  const[formError,setFormError]=useState({})
 const {email,password} = data;

  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormError(validate(data))
  }

  const validate = (values) =>{
    const errors = {}
    if(!values.email){
      errors.email = "email is requires"
    }
    if(!values.password){
      errors.password = "password is required"
    }
    return errors;

  }
  return (
    <div >
       <form  onSubmit={handleSubmit}>
        <input type="text"  placeholder='Enter your Email' name='email' value={email} onChange={handleChange}/>
        <p>{formError.email}</p>
        <input type="text" placeholder='enter your password' name='password' value={password} onChange={handleChange}/>
        <p>{formError.password}</p>
        <button type='submit'>Login</button>
       </form>
       Dont have a account please <Link to={"/SignIn"}>SingIn</Link> 
    </div>
  )
}

export default LogIn
