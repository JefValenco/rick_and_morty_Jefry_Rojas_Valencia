import { useState } from "react";
// 10) importar la validation fn
import Validation from "./validation";

const Form = () => {
  // Creé este componente y le creé sus labels y etc. Importate fue que para password en lugar de tet le puse password apra que me saliera en punticos

  //4) Pego esot del readme y también importo useState por que en está línea se esta usando.
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  /* 6) creo un handle y un onchage que va a recibir ese handle por aprametro */
  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      // 7) // event.target.value, value sería alguna de las propiedaddes del   const [inputs, setInputs] = useState({})
      // [event.target.name] el name es la propiedad que le pase a todos los input. Su valor va a depender del input en el cual esté escribiendo el ususario:
      // LLeva corchetes por que es una propeidad dinamica.
      [event.target.name]: event.target.value,
    });

    // nostraemos error ya que esta apagado

    setErrors(
      Validation({
        // 11B) Hacemos una copia de todo y vamos a modificar la propeidad dependiendo de en donde está escribiendo el usuario y lo que está escribiendo el usuario
        ...userData,
        [event.target.name]: event.target.value,
      })
    );

    //8)
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      {/* 5) Acá estoy bindiando a través del value con el estado [userData,setUserData]
      ya con esto input y el estado del componente estrian bindeados */}
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
      {/* {errors.password && <p style={{ color: "red" }}>{errors.username}</p>} */}

      <button>LOGIN</button>
    </form>
  );
};

export default Form;

//9)userData como parametro por que es el estado que me va a llegar con la info
const validation = (userData) => {
  let errors = {};
  /* 9B) COPIE LA REGEX Y LA NEGUE. SI NO ES UN EMAIL.*/
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)) {
    errors.username = "El email no es correcto";
  }
  /* 9C)) si no has anda de información en la locación userData => username  imprime esto:*/
  if (!userData.username) {
    errors.username = "Este campo está vacío";
  }

  if (!userData.username.length > 35) {
    errors.username = "Texto debe ser menor de 35 caracteres";
  }
  if (userData.password.match(/^[A-Za-z]\w{6,10}$/)) {
    // Mmatch da resultado true o false. si es false eesntraría al if
    // esta Regex la saqué de internet.
    errors.password = "contra mala";
    /*    "password must be between 6 to 10 characters which contain only characters, numeric digits, underscore and first character must be a letter";
     */
  }
};
