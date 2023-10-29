import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    inputText: "",
    continent: "Todos",
    populationName: "",
    sortBy: "",
  });

  const handleSearch = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    dispatch(searchCountries(input));
  }, [input]);



  return (
    <div>
      <input
        type="text"
        name="inputText"
        value={input.inputText}
        onChange={handleSearch}
      />
      <select name="continent" onChange={handleSearch}>
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
        <option value="population">Población</option>
        <option value="name">Nombre</option>
      </select>

      <select name="sortBy" id="" onChange={handleSearch}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
    </div>
  );
};

export default SearchBar;
