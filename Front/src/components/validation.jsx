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

  if (!userData.username.length > 5) {
    errors.username = "Texto debe ser menor de 35 caracteres";
    console.log("El email no es 35");
  }
  if (userData.password.match(/^[A-Za-z]\w{6,10}$/)) {
    errors.password = "contra mala";
  }
};

export default validation;
