import "./App.css";
/* import Card from "./components/Card.jsx"; */
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";
import Form from "./components/Form.jsx";

// 24) traer el useEffet
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//  1) Con el hook useLocation voy a lograr que loggin sea la pag de intro y le navbar aparesca solo en la demás

function App() {
  const [characters, setCharacters] = useState([]);

  //23) llamamos a useNavigate y lo iportamos arriba

  const navigate = useNavigate();
  // Agrego el hook useLocation.
  const location = useLocation();

  // 20 porque perdí la cuenta) crear un estado access. Inicia en false por que es un booleano
  const [access, setAccess] = useState(false);

  // 21)
  const username = "nombre@gmail.com";
  const password = "A1perro";

  // 22) Esta funcíon tiene que preguntar si lo que se esta recibiendo por parametro es igual a lo que se tiene
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  //25 ) Recibe 2 parametros, el primero es una calback y el segundo es un array
  // Este useEffect lo estoy usando para simular una simulación de seguridad.
  // Basicamente estoy diciendo que si el useState es false navegeu a "/". de lo contrarío haría la función login de arriba
  // y navegaría al home
  //A la hr del té no va a hacer nada la pagina se refesca pero mantiene los datos llenados incorrectametne aún en la casilla
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  /*  Si le hicieramos un console.log() podríamos ver en al consola que useLocation es un objeto donde lo 
 que más me va  aimportar es el pathname. Asi es como vamos a poder hacer un 
 *renderezado condicional.
 */

  /* 
    
    Como lo tenian en los videos no me daba. Trabajandole , fue
    creando una variavle data  [0] que logre que cogiera el id del obj y lo mostrara.
     fetch(` http://localhost:3001/rickandmorty/character/${character}`)
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
    */
  /* 
   Acá en integration 8: Modifique la url. estaba asi antes:

   */
  /*    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => {
*/

  /* 
Manera integration 7

 function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => {
        console.log(response.status); // logs the HTTP status code
        console.log(response.headers); // logs the response headers
        return response.json(); // returns the JSON response body
      })
      .then((data) => {
        console.log(data); // logs the JSON response body
        const character = data[0]; // extract the character object from the response array
        if (character && character.name) {
          setCharacters((oldChars) => [...oldChars, character]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => console.error(error));
  }


*/

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* 3) */}
      {/* 26) Le paso la función a form */}
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}
      {/* Acá estoy diciendo que si el pathname es = a "/" entonces , (que sería "?") yo voy a mostar From si no mostraria a Nav */}
      {/*   <Nav onSearch={onSearch} /> */}
      <Routes>
        <Route
          path="home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
