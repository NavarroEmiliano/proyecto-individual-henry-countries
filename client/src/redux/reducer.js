/* eslint-disable no-case-declarations */
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

const initialState = {
  allCountries: [],
  filteredCountries: [],
  allActivities: [],
  allContinents: [],
  inputFormFilter: [],
  filters: {
    inputText: "",
    continent: "Todos",
    populationName: "",
    activity: "Todas",
    sortBy: "",
  },
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
      const { inputText, continent, activity, populationName, sortBy } =
        action.payload;

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

      if (populationName === "name") {
        if (sortBy === "A") {
          countries.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          countries.sort((a, b) => b.name.localeCompare(a.name));
        }
      } else {
        if (sortBy === "A") {
          countries.sort((a, b) => a.population - b.population);
        } else {
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

    case DELETE_ACTIVITY: {
      return {
        ...state,
        allActivities: [...state.allActivities].filter(
          (activity) => activity.name !== action.payload
        ),
      };
    }

    case GET_ALL_CONTINENTS:
      const continents = [
        ...new Set(state.allCountries.map((country) => country.continent)),
      ];
      return {
        ...state,
        allContinents: continents,
      };

    case SAVE_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    case INPUT_FORM_FILTER:
      const countriesCondition = (country) => {
        const countryName = country.name.toLowerCase();
        const payload = action.payload.toLowerCase();
        return countryName.includes(payload);
      };
      const countriesFiltered = [...state.allCountries].filter(
        countriesCondition
      );

      return {
        ...state,
        inputFormFilter: countriesFiltered,
      };
    default:
      return state;
  }
};

export default reducer;
