import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupForm.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/posts/" />;
  }

  return (
    <div className='holder-container'>

    <form onSubmit={onSignUp} className="modal" id="signup-form">
      <p className="login-greet" id="signup-greet">
        Join Our Community!
      </p>
      {errors.map((error, ind) => (
        <div key={ind}>{error}</div>
      ))}
      <div className="input-values" id='signup-input-values'>
        <div className="input-value-holder-signup">
          <i aria-hidden="true" className="fa fa-user"></i>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={updateUsername}
            value={username}
          />
        </div>
        <div className="input-value-holder-signup">
          <i aria-hidden="true" className="fa fa-envelope" />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          />
        </div>
        <div className="input-value-holder-signup">
          <i aria-hidden="true" className="fa fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          />
        </div>
        <div className="input-value-holder-signup">
          <i aria-hidden="true" className="fa fa-lock"></i>
          <input
            type="password"
            name="repeat_password"
            placeholder="Re-type Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          />
        </div>
        <button type="submit" className="modal-button" style={{marginBottom: '15px'}}>
          Sign Up
        </button>
      </div>
    </form>
    </div>
  );
};

export default SignUpForm;
