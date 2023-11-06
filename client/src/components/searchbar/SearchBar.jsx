import { useDispatch, useSelector } from "react-redux";
import { saveFilters, searchCountries } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { allActivities, allContinents,filters } = useSelector((state) => state);

  const [input, setInput] = useState(filters);
  const handleSearch = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  
  
  useEffect(() => {
    dispatch(saveFilters(input));
    dispatch(searchCountries(input));
  }, [input])
  

  return (
    <div className={styles.div__input}>
      <input
        type="text"
        name="inputText"
        value={input.inputText}
        onChange={handleSearch}
        className={styles.input}
      />
      {pathname === "/home" && (
        <div className={styles.options__div}>
          <select name="activity" id="" onChange={handleSearch}>
            <option value="Todas">Actividades</option>
            {Array.isArray(allActivities) &&
              allActivities.length > 0 &&
              [...new Set(allActivities.map((activity) => activity.name))].map(
                (activityName) => (
                  <option key={activityName} value={activityName}>
                    {activityName}
                  </option>
                )
              )}
          </select>

          <select name="continent" onChange={handleSearch}>
            <option value="Todos">Continente</option>
            {allContinents.map((continent) => (
              <option key={continent} value={continent}>
                {" "}
                {continent}
              </option>
            ))}
          </select>

          <select name="populationName" id="" onChange={handleSearch}>
            <option value="population">Población</option>
            <option value="name">Nombre</option>
          </select>

          <select name="sortBy" id="" onChange={handleSearch}>
            <option value="">Orden</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
