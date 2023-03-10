import { ADD_FAVORITTE } from "./actionTypes";
import { DELETE_FAVORITTE, FILTER, ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [], // 3)Agregamos esto
};

/*
 * gender
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITTE:
      return {
        ...state,

        /* 4)
Antes estaba asi pero le agremgamos lo que nos pidio el read menubar

myFavorites: [
  ...state.myFavorites,
  action.payload,
] Con esto le estoy concatenando lo persoanjes a mis favoritos, sin pisarlos */

        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case DELETE_FAVORITTE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== action.payload
        ), //con vamos a quedar con todos los personakes menos con el que su "id " coincida con el que me ingresen
      };

    case FILTER:
      //5 y 06)
      const allCharactersFiltered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };

    /* 
allCharacters
*/
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente" // Voy a estar filtrando a:
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
