import { useDispatch, useSelector } from "react-redux";
import { searchCountries } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { allActivities } = useSelector((state) => state);

  const [input, setInput] = useState({
    inputText: "",
    continent: "Todos",
    populationName: "",
    activity: "Todas",
    sortBy: "",
  });

  const handleSearch = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    dispatch(searchCountries(input));
  }, [input]);

  console.log(input);

  return (
    <div>
      <input
        type="text"
        name="inputText"
        value={input.inputText}
        onChange={handleSearch}
      />
      {pathname === "/home" && (
        <div>
          <select name="activity" id="" onChange={handleSearch}>
          <option value=""></option>
            <option value="Todas">Todas</option>
            {[...new Set(allActivities?.map((activity) => activity.name))].map(
              (activityName) => (
                <option key={activityName} value={activityName}>
                  {activityName}
                </option>
              )
            )}
          </select>

          <select name="continent" onChange={handleSearch}>
          <option value=""></option>
            <option value="Todos">Todos</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
          </select>

          <select name="populationName" id="" onChange={handleSearch}>
            <option value=""></option>
            <option value="population">Población</option>
            <option value="name">Nombre</option>
          </select>

          <select name="sortBy" id="" onChange={handleSearch}>
            <option value=""></option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
