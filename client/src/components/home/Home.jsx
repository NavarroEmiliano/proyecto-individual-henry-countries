import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllCountries,
  filterCountries,
} from "../../redux/actions";
import Cards from "../cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const { filteredCountries } = useSelector((state) => state);



  const handleFilter = (event) => {
    if (event.target.name === "Continent") {
      dispatch(filterCountries(event.target.value));
    }
  };



  useEffect(() => {
    dispatch(addAllCountries());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h3>Ordenar por Continente</h3>
      <select name="Continent" onChange={handleFilter}>
        <option value="Todos">Todos</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
      </select>

      <select name="PopulationName" id="" >
        <option value="population">Población</option>
        <option value="name">Nombre</option>
      </select>

      <select name="AscDesc" id="" >
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <Cards allCountries={filteredCountries} />
    </div>
  );
};

export default Home;
