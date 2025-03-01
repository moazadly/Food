import { useState } from "react";
import "./login.css";
import { assets } from "../../assets/assets";
function Login({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-inputs">
          {currState === "Sign Up" ? (
            <input type="text" placeholder="Enter Your Name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Enter Your Email" required />
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Sign Up" ? (
          <a onClick={() => setCurrState("Login")}>Have an account?</a>
        ) : (
          <a onClick={() => setCurrState("Sign Up")}>Don't have an account?</a>
        )}
      </form>
    </div>
  );
}

export default Login;
