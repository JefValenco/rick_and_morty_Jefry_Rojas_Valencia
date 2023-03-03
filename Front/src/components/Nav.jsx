import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

//6) Acá Nav recibe onSearch y s elo pasa a SearchBar por que es quien la va a ejecutar.
// El componente SearchBar ya tiene desde el ejercio pasado el onSearch ya definido con su onClick
// La propiedad en este caso onSearch debe pasarse del padre al hijo. por eso primero la pasamos a Nav y luego a SearchBar.
// Contrarío los eventos van del hijo hacia arriba
const Nav = ({ onSearch }) => {
  return (
    <nav>
      <Link to="about">About</Link>
      <Link to="home">Home</Link>
      {/*  //En este integratoin también creamos este logout */}
      <Link to="/">Logout</Link>
      <Link to="/favorites">Favorites</Link>
      {/*   <Link to="/login">Login</Link> */}
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
