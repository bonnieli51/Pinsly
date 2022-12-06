import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
  
        let username = email.split("@")[0];
      
        return dispatch(sessionActions.signup({ email, username, password, age}))
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
        <form id="signup-form" onSubmit={handleSubmit}>
            <h1> Welcome to Pinsly </h1>
            <h3> Find new ideas to try </h3>
          
            <label>
                Email
                <input
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <ul>
                {/* {errors.map(error => <li key={error}>{error}</li>)} */}
                {errors.map(error => {
                    if (error.includes('email')) return <li key={error}>{error.split(" ").slice(1).join(" ")}</li>
                })}
            </ul>
            {/* <label>
                Username
                <input
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label> */}
            <label>
                Password
                <input
                    placeholder="Create a password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>  
            <ul>
                {errors.map(error => {
                    if (error.includes('password')) return <li key={error}>{error.split(" ").slice(1).join(" ")}</li>
                })}
            </ul>
            <label>
                Age
                <input
                    placeholder="Age"
                    type="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value ? parseInt(e.target.value): "")}
                    required
                />
            </label> 
            <ul>
                {errors.map(error => {
                    if (error.includes('Sorry')) return  <li  key={error}>{error.split(" ").slice(1).join(" ")}</li>
                })}
            </ul>
            <button type="submit">Continue</button>
        </form>
    );
}

export default SignupForm;