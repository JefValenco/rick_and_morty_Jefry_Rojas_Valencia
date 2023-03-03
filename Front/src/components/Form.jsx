import React from "react";

import { useState } from "react";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

export const validate = (userData) => {
  let errors = {};
  if (!userData.username) {
    errors.username = "Se requiere un username";
  }
  if (!regexEmail.test(userData.username)) {
    errors.username = "Debe ser un correo electrónicoe";
  }

  if (!regexPassword.test(userData.password)) {
    errors.password =
      "Debe contener mas de 6 digitos, una letra mayúscula y un número";
  }
  /*   if (userData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
    errors.password = "contra mala";
  } */

  return errors;
};

// 28 ) Ahora estamos recibiendo login por parametro y se lo ponemos como destructuring
function Form({ login }) {
  const [userData, setuserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...userData,
      })
    );
  };

  // 29)
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  // Este submit es apra mandar info
  /*   const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      alert("Datos completos");
      setuserData({
        username: "",
        password: "",
      });
      setErrors({
        username: "",
        password: "",
      });
    } else {
      alert("Debe llenar todos los datos");
    }
  }; */

  return (
    /*   Así serpia si fuesemos a tener un submit <form onSubmit={handleSubmit}> */
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username:</label>
      <input
        type="text"
        name="username"
        placeholder="Escribe tu username.."
        value={userData.username}
        onChange={handleChange}
      ></input>
      {errors.username && <p>{errors.username}</p>}
      <label htmlFor="password">Correo password</label>
      <input
        type="password"
        name="password"
        placeholder="Escribe tu password.."
        value={userData.password}
        onChange={handleChange}
      ></input>
      {errors.password && <p>{errors.password}</p>}{" "}
      {/* Así es para enviar info  <button type="submit">LOGIN</button> */}
      <button type="submit">LOGIN</button>
    </form>
  );
}

export default Form;
