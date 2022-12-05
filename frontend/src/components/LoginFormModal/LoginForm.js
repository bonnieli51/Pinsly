import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.login({ credential, password }))
        .catch(async (res) => {
          let data;
          try {
            data = await res.clone().json();
          } catch {
            data = await res.text(); 
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
  };

  return (
    <>
      <form id="login-form" onSubmit={handleSubmit}>
        <h1> Welcome to Pinsly </h1>
        <label>
          Email
          <input
            placeholder="Email"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <ul>
          {errors.map(error => {
            if (error.includes('email')) return <li key={error}>{error}</li>
          })}
        </ul>
        <label>
          Password
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <ul>
          {errors.map(error => {
            if (error.includes('password')) return <li key={error}>{error}</li>
          })}
        </ul>
        <button id="login-button" type="submit">Log In</button>
        <h2>OR</h2>
      </form>
      <button 
        id="demo-button" 
        type="submit"
        onClick={()=> dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }))} >
        Log In as Demo User
        </button>
    </>
  );
}

export default LoginForm;