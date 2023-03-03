import React from "react";
import { useState } from "react";



const Form = () => {

  const validation = (userData) => {
    let errors = {};
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)) {
      errors.username = "El email no es correcto";
      console.log("El email no es correcto");
    }
    if (!userData.username) {
      errors.username = "Este campo está vacío";
      console.log("El email no es vacio");
    }
  
    /* if (!userData.username.length > 5) {
      errors.username = "Texto debe ser menor de 35 caracteres";
      console.log("El email no es 35");
    } */
    if (userData.password.match(/^[A-Za-z]\w{6,10}$/)) {
      errors.password = "contra mala";
    }
  };
 
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };


  return (
    <form>
      <label htmlFor="username">Username</label>

      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      {errors.username && <p>{errors.username}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
      />

      <button>LOGIN</button>
    </form>
  );
};

export default Form;
