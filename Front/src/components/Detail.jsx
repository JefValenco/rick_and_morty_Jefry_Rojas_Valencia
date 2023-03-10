import { useState, useEffect } from "react";
// El useEffect simula los ciclos de vida
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  // Este es el famoso detailId usado en el link detail en app
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      // Fecth me está trayendo info sobre detailId que sería un id de un personaje
      .then((response) => response.json())
      .then((char) => {
        // esa info la transformo en date y la guardo en char
        if (char.name) {
          setCharacter(char);
          // Luego seteo el estado con esa info de char
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]); // Acá decía [id] y en realidad es {detailId} que sería lo que nos estamos trayendo de useParams

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>{character?.name}</h1>
      {/* Acá ponemos la infor de mi estado guardada */}
      {/* El ? pregunta sitengo info en mi estado */}
      {/*       <h2>Detail</h2> */}
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      {/*  <p>{character?.type}</p> */}
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      {/*   <p>{character?.location}</p> */}
      <img src={character?.image} alt="" />
    </div>
  );
};

export default Detail;
