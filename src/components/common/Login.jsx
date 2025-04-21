import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import "../../assets/login.css";
//import './UserLogin.css'

export const Login = () => {
    const{register,handleSubmit}=useForm()
    const navigate = useNavigate()

    const submitHandler= async(data)=>{
        
        
      const res = await axios.post("/loginbuyer", data);
      console.log(res.data);
      if (res.status === 200) {
        alert("Login Success");
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.roleId);

          navigate("/product")
  


      }

      else{
        alert("login failed")
      }
   
      //alert("Login Failed");
    
  };
    
  return (

    <div className="login">
      <div className="login-card">
        <div className="brand">
          {/* <div className="brand-logo"></div> */}
          <h1>LOGIN USER</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter password"
            />
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="social-login">
          <p>Or login with</p>
          {/* <div className="social-buttons">
            <div className="social-btn">G</div>
            <div className="social-btn">F</div>
          </div> */}
        </div>
        <div className="signup-link">
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login;