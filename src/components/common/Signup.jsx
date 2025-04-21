import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../assets/signup.css";
// import "../../assets/login.css";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  //navigation...
  const navigate = useNavigate();

  const submitHandler = async(data) => {
    console.log(data);
    data.roleId = "67bd46da9fe5241bb8192b49"

    const res = await axios.post("/buyersignup",data)
    console.log(data);
    console.log(res);
    
    //res.status
    if(res.status === 201){
      alert("User created successfully")
      navigate("/login")
    }
    else{
      alert("User not created")
    }

  };

  return (
  //   <div style={{ textAlign: "center" }}>
  //     <form onSubmit={handleSubmit(submitHandler)}>
  //       <div>
  //         <h1>USER SIGNUP</h1>
  //         <label>Full Name</label>
  //         <input type="text" {...register("fullName")} />
  //       </div>
  //       <div>
  //         <label>Email</label>
  //         <input type="text" {...register("email")} />
  //       </div>
  //       <div>
  //         <label>Password</label>
  //         <input type="text" {...register("password")} />
  //       </div>
  //       <div>
  //         <label>PhoneNumber</label>
  //         <input type="int" {...register("phonenumber")} />
  //       </div>
  //       <div>
  //         <label>Address</label>
  //         <input type="text" {...register("address")} />
  //       </div>
  //       <div>
  //         <input type="submit"></input>
  //       </div>
  //     </form>
  //   </div>
  // );

  <div className="signup">
  <div className="signup-card">
    {/* <div className="brand"> */}

      <h1>CREATE ACCOUNT</h1>
      <p>Sign up to get started</p>
    {/* </div> */}
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...register("fullName")} placeholder="Enter first name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} placeholder="Enter password" />
      </div>
      <div className="form-group">
        <label htmlFor="number">Phone No</label>
        <input type="text" id="number" {...register("phoneNumber")} placeholder="Enter Phone No" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" id="firstname" {...register("address")} placeholder="Enter Address" />
      </div>
      <button type="submit" className="signup-btn">Sign Up</button>
    </form>
    <div className="signup-link">
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  </div>
</div>
);

};
export default Signup;
