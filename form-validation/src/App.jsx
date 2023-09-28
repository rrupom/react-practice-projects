import "./style.css";
import { useState } from "react";
import validator from "./validation";

export default function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  function handleInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const errorObject = validator(values);
    setErrors(errorObject);
  }

  function handleCancel() {
    setValues({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  }

  return (
    <div className="center-container">
      <form className="centered-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={values.name}
          onChange={handleInput}
        />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={values.email}
          onChange={handleInput}
        />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={values.password}
          onChange={handleInput}
        />
        {errors.password && <p>{errors.password}</p>}
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          required
          value={values.confirmPassword}
          onChange={handleInput}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <div className="button-container">
          <button type="submit">Sign Up</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
