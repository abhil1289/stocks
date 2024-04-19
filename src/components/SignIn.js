
import React, { useState } from 'react';


const SignIn= () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password:'',
    confirmPassword:''   
  });
  const [formErrors,setFormErrors]=useState({});

  const { userName, email, password, confirmPassword } = formData;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData))
  };

  const validate = (values) => {
    const errors = {};
  
    if (!values.userName) {
      errors.userName = "Username is Required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    return errors;
  };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the username' name='userName' value={userName} onChange={handleChange}/><br />
         <p>{formErrors.userName}</p>
        <input type="text" placeholder='Enter the email' name='email' value={email} onChange={handleChange}/>
         <p>{formErrors.email}</p>
        <input type="text" placeholder='Enter password' name='password' value={password} onChange={handleChange}/> 
        <p>{formErrors.password}</p>
        <input type="text" placeholder='confirm password' name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
        <p>{formErrors.confirmPassword}</p>
        <button name='submit'>submit</button>
    </form>
  );
};

export default SignIn;
