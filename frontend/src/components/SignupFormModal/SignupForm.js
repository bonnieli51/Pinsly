import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let username = email.split("@")[0];

    return dispatch(
      sessionActions.signup({ email, username, password, age })
    ).catch(async (res) => {
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
      <div className="form-logo">
        {/* <i class="fa-brands fa-pinterest"></i> */}
        <i class="fa-solid fa-poo"></i>
      </div>
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
        {errors.map((error) =>
          error.includes("email") ? (
            <li key={error}>{error.split(" ").slice(1).join(" ")}</li>
          ) : null
        )}
      </ul>

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
        {errors.map((error) =>
          error.includes("password") ? (
            <li key={error}>{error.split(" ").slice(1).join(" ")}</li>
          ) : null
        )}
      </ul>
      <label>
        Age
        <input
          placeholder="Age"
          type="text"
          value={age}
          onChange={(e) =>
            setAge(
              e.target.value && Number.isInteger(parseInt(e.target.value))
                ? parseInt(e.target.value)
                : ""
            )
          }
          required
        />
      </label>
      <ul>
        {errors.map((error) =>
          error.includes("Sorry") ? (
            <li key={error}>{error.split(" ").slice(1).join(" ")}</li>
          ) : null
        )}
      </ul>
      <button type="submit">Continue</button>
      <p id="signup-form-p">
        By continuing, you agree to Pinsly's <p id="bold">Terms of Service</p>{" "}
        and acknowledge you've read our <p id="bold">Privacy Policy.</p>
      </p>
    </form>
  );
}

export default SignupForm;
