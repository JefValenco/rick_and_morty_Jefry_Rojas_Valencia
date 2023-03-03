import { Link } from "react-router-dom";
// Acá construimos todo lo del id
// 3
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, removeFavorite } from "../redux/actions";

const Card = ({ name, species, gender, image, onClose, id }) => {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, species, gender, image, onClose, id })); // En el ejercicion decía de pasarle props pero como ya teníamos el destructuring ready le pasamos el destruccturing
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        // Acá splo iría id ya que estamos haciendo le destructuring a los props
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      <button onClick={onClose}>X</button>
      {/* Si escribo props.onClose() los () hacen que la función se haga ejecute y no escuche el evento , por eso no se ponen */}

      {isFav ? ( // Recordar que esto es un  termanrio por usar  "?" entonces pregunta: if fav.... ":" else....
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
