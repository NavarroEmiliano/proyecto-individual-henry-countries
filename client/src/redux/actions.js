import {
  ADD_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SEARCH_COUNTRIES,
  GET_ALL_ACTIVITIES,
  DELETE_ACTIVITY,
  GET_ALL_CONTINENTS,
  SAVE_FILTERS,
  INPUT_FORM_FILTER,
} from "./action-type";
import axios from "axios";

const RUTA = "http://localhost:3001";

const endpoint = `${RUTA}/countries`;

export const addAllCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: ADD_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const getCountryById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${RUTA}/${id}`);
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const searchCountries = (input) => {
  return {
    type: SEARCH_COUNTRIES,
    payload: input,
  };
};

export const getAllActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${RUTA}/activities`);

      if (typeof data !== "string") {
        return dispatch({
          type: GET_ALL_ACTIVITIES,
          payload: data,
        });
      }
      return "No hay actividades";
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const deleteActivityStore = (name) => {
  return {
    type: DELETE_ACTIVITY,
    payload: name,
  };
};

export const getAllContinents = () => {
  return {
    type: GET_ALL_CONTINENTS,
  };
};

export const saveFilters = (filters) => {
  return {
    type: SAVE_FILTERS,
    payload: filters,
  };
};

export const getCountriesFromInputForm = (input) => {
 return {
  type:INPUT_FORM_FILTER,
  payload:input
 }
}

