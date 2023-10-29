/* eslint-disable no-case-declarations */
import {
  ADD_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SEARCH_COUNTRIES,
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

      case SEARCH_COUNTRIES:
        const { inputText, continent } = action.payload;
      
        const searchCondition = (country) => {
          const countryName = country.name.toLowerCase();
          const searchText = inputText.toLowerCase();
          const continentFilter = continent === "Todos" || country.continent === continent;
          return countryName.includes(searchText) && continentFilter;
        };
      
        const countries = [...state.allCountries].filter(searchCondition);
      
        return {
          ...state,
          filteredCountries: countries,
        };
      

    default:
      return state;
  }
};

export default reducer;
