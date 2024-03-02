import React from 'react';
import './CSS/loginSignup.css';
import loginimage from '../Components/Assests/loginSignup.jpg';
import { SignInButton,SignIn,SignUp } from "@clerk/clerk-react";

const Signin = () => {
  return (
    <div className="loginsignup">
      <div className="image-container">
      </div>
      <div className="signin-container">
        <SignIn/>
      </div>
    </div>
  );
};

export default Signin;
