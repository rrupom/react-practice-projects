import "./style.css";
import { useState } from "react";

export default function App() {
  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [status, setStaus] = useState(false);

  function handleChange(e) {
    setInformation({ ...information, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setStaus(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="element">
          <label htmlFor="firstName">
            First Name : {"    "}
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              value={information.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="element">
          <label htmlFor="lastName">
            Last Name {"      "}
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              value={information.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="element">
          <label htmlFor="email">
            Email: {"     "}
            <input
              type="text"
              name="email"
              placeholder="email"
              value={information.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="element">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {status && (
          <div>
            <h3>First Name : {information.firstName}</h3>
            <h3>Last Name : {information.lastName}</h3>
            <h3>Email : {information.email}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
