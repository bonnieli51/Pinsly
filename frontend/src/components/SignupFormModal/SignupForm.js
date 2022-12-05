import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    console.log(errors)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (password === confirmPassword) {
            // setErrors([]);
        let username = email.split("@")[0];
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    let data;
                    try {
                        // .clone() essentially allows you to read the response body twice
                        data = await res.clone().json();
                    } catch {
                        data = await res.text(); // Will hit this case if the server is down
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                });
        // }
        // return setErrors(['Confirm Password field must be the same as the Password field']);
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
            {/* <label>
                Confirm Password
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </label> */}
            <button type="submit">Continue</button>
        </form>
    );
}

export default SignupForm;