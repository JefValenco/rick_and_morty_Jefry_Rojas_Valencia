// 8)
import { useState } from "react";

function SearchBar({ onSearch }) {
  //8) Este es el estado inicial
  const [character, setCharacter] = useState("");
  //8C) AGREGO EL handler que falta por haber introducido el onChange

  const handleChange = (event) => {
    setCharacter(event.target.value);
    /* No mehago una copia por que no me importa lola busqueda pasada, si no lo que está escribiendo ahora mismo */
  };

  return (
    <div>
      {/* 8B) agrego el value y el listener onChange */}
      {/* este value es lo que el usuario va escribiendo
      el onChange siempre recibe el handle */}
      <input type="search" value={character} onChange={handleChange} />
      {/* 8D) para poder pasarle parametro a {onSearch} necesito escribirla asi: {() => onSearch} */}
      <button onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
}

export default SearchBar;
