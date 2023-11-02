/* eslint-disable no-case-declarations */
import {
  ADD_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SEARCH_COUNTRIES,
  GET_ALL_ACTIVITIES,
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
      const { inputText, continent, activity ,populationName,sortBy } = action.payload;

      const searchCondition = (country) => {
        const countryName = country.name.toLowerCase();
        const searchText = inputText.toLowerCase();
        const continentFilter =
          continent === "Todos" || country.continent === continent;
        const activityFilter =
          activity === "Todas" ||
          country.Activities.some((element) => element.name === activity);
        return (
          countryName.includes(searchText) && continentFilter && activityFilter
        );
      };



      const countries = [...state.allCountries].filter(searchCondition);

      if(populationName === "name"){
        if(sortBy === "A"){
          countries.sort((a, b) => a.name.localeCompare(b.name));
        }else {
          countries.sort((a, b) => b.name.localeCompare(a.name));
        }
      } else{
        if(sortBy === "A"){
          countries.sort((a, b) => a.population - b.population);
        }else {
          countries.sort((a, b) => b.population - a.population);
        }
      }

      return {
        ...state,
        filteredCountries: countries,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
