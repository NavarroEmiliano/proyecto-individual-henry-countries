/* eslint-disable no-case-declarations */
import {
  ADD_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  FILTER_CONTINENT,
} from "./action-type";

const initialState = {
  allCountries: [],
  filteredCountries: [],
  allActivities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        filteredCountries: action.payload,
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        allCountries: action.payload,
      };
    case FILTER_CONTINENT:
      return {
        ...state,
        filteredCountries:
          action.payload !== "Todos"
            ? [...state.allCountries].filter((country) => {
                return country.continent === action.payload;
              })
            : [...state.allCountries],
      };


    default:
      return state;
  }
};

export default reducer;
