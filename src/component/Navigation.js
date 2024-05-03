import React, { useState } from "react";

export default function CustomNav() {
const [formData,setFormData] = useState({
    username:'',
    password:''
});

const handleInput = (event)=>{
    const {name, value} = event.target;
    setFormData({
        ...formData,
        [name]:value
    });
}

document.addEventListener("DOMContentLoaded",()=>{
  let loginData = localStorage.getItem(JSON.parse('datas'));
  console.log(loginData);
})

const handleSubmission = (event)=>{
    event.preventDefault();
}
  return (
    <>
      <div className="login-container">
        <div className="outer-container">
          <div className="login-content">
            <h1>Welcome Back</h1>
            <form id="loginForms" name="LoginValidate">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={handleInput}
                placeholder="Enter username here"
                name="username"
                id="userLogin"
              />
              <p className="userNameErrorMessage"></p>

              <label htmlFor="Password">Password:</label>
              <input
                type="password"
                placeholder="ENter passowrd here"
                name="password"
                onChange={handleInput}
                value={formData.password}
                id="userPass"
              />
              <p className="passErrorMessage"></p>

              
              <input
                type="submit"
                value="Login"
                id="login-field"
                name="login"
              />
              <p id="create-id">
                Don't have an account?
                <span onClick={handleSubmission}>
                  Create now
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
