import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FaCircleUser, FaLock } from "react-icons/fa6";
import Alert from "react-bootstrap/Alert";
import "../style/LoginForm.css";
//import axios from "axios";
//import { setAuthUser } from "../helper/Storage";


const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    err: [],
  });

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform validation
    if (!login.email || !login.password) {
      // If email or password is empty, display an error message
      setLogin({ ...login, err: ['Please enter email and password'] });
      return; // Exit function early
    }

    // If validation passes, navigate to the desired route
    setLogin({ ...login, loading: true, err: [] });
    navigate("/admin");
  };

  return (
  
    <div className="loginform">
        <div className='side'></div>
           <h1  className="mg">Login</h1>

      <Form onSubmit={handleLogin}>
        <Form.Group >
          <Form.Control
            type="email"
            placeholder="Email"
            required
            value={login.email}
            onChange={(event) => setLogin({ ...login, email: event.target.value })}
          />
          <FaCircleUser className='icon-user' />
        </Form.Group>

        <Form.Group >
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={login.password}
            onChange={(event) => setLogin({ ...login, password: event.target.value })}
          />
          <FaLock  className='icon'/>
        </Form.Group>

       { /* <Link to="/admin"></Link>*/}
        <Button
    className="sub"
    variant="primary"
    type="submit"
    disabled={login.loading === true}
  >
    Login
  </Button>
{" "}

        
        <div>
      {/* Your login form components */}
      <p className="forgot-password"/* onClick={handleForgotPassword}*/  >
        <a href="#">Forgot password?</a>
      </p>
      <p className="txt">Don't have an account? <a  href="/SignUP" /*onClick={handleRegister}*/ style={{ cursor: 'pointer' }}>Register here</a></p>
     
    </div>
    <Link to="/reviewer">
  <Button className="sb" variant="primary" type="submit">
    go to reviewer
  </Button>
</Link>{" "}

      
        
      </Form>
    </div>
    
  );
};
    

export default Login;
