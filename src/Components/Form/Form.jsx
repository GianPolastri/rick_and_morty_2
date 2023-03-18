import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const prop = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [prop]: value,
    });
    validation(
      {
        ...userData,
        [prop]: value,
      },
      errors,
      setErrors
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">Username:</label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      <p>{errors.username}</p>

      <br />
      <br />
      <label htmlFor="">Password:</label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
      />
      <p>{errors.password}</p>

      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

// value={input.} onChange={handleInputChange}
