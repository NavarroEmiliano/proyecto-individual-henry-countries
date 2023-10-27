import {
  ADD_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  FILTER_CONTINENT,
} from "./action-type";
import axios from "axios";
const endpoint = "http://localhost:3001/countries";

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
      const { data } = await axios.get(`${endpoint}/${id}`);
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const filterCountries = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};
