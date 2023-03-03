import { ADD_FAVORITTE, DELETE_FAVORITTE, FILTER, ORDER } from "./actionTypes";

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITTE,
    payload: character,
  };
};

export const removeFavorite = (id) => {
  return {
    type: DELETE_FAVORITTE,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
