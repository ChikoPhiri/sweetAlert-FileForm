import React, { useState } from "react";
import "../components/Form.css";
import Swal from "sweetalert2";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);

  const handleValues = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      Swal.fire({
        title: "Empty field",
        text: "Please enter all the fields",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Successfully",
        text: "You have registered this form!",
        icon: "success",
      });
      setMessages([...messages, { name, email, password }]);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <form onSubmit={handleValues}>
        <h1>Registration Form</h1>
        <label>Name</label> <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
        <ul>
          {messages.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.password}</p>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Form;
