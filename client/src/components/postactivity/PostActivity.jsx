import { useSelector } from "react-redux";
import styles from "./PostActivity.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllCountries } from "../../redux/actions";
import SearchBar from "../searchBar/SearchBar";
import postActivityDb from "./postActivityDb";

const PostActivity = () => {
  const dispatch = useDispatch();
  const [activity, setActivity] = useState({
    name: "",
    season: "",
    duration: "",
    difficulty: "",
    countries: [],
  });

  const { filteredCountries } = useSelector((state) => state);

  const handleSearchBar = (country) => {
    const boolean = activity.countries.some(
      (pais) => pais.name.toLowerCase() === country.name.toLowerCase()
    );
    if (boolean === false) {
      setActivity({
        ...activity,
        countries: [...activity.countries, country],
      });
    }
  };

  const handleStateActivity = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
  };

  const handleDeleteActivity = (country) => {
    setActivity({
      ...activity,
      countries: [...activity.countries].filter((pais) => {
        return pais.name.toLowerCase() !== country.toLowerCase();
      }),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const countryId = activity.countries.map((country) => country.id);
    const { name, season, duration, difficulty } = activity;

    console.log (await postActivityDb({
      name,
      season,
      duration,
      difficulty,
      countryId,
    }));
  };

  useEffect(() => {
    dispatch(addAllCountries());
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input
          name="name"
          type="text"
          value={activity.name}
          onChange={handleStateActivity}
        />
        <br />
        <label htmlFor="season">Estación: </label>
        <select
          name="season"
          id=""
          value={activity.season}
          onChange={handleStateActivity}
        >
          <option value=""></option>
          <option value="Primavera">Primavera</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
        </select>
        <br />
        <label htmlFor="duration">Duración: </label>
        <input
          name="duration"
          type="text"
          value={activity.duration}
          onChange={handleStateActivity}
        />
        <br />
        <label htmlFor="difficulty">Dificultad: </label>
        <input
          name="difficulty"
          type="text"
          value={activity.difficulty}
          onChange={handleStateActivity}
        />
        <br />
        <label htmlFor="countries">Pais: </label>
        <SearchBar />

        {filteredCountries && filteredCountries.length !== 250
          ? filteredCountries
              .map((country) => {
                return (
                  <div
                    key={country.name}
                    onClick={() => handleSearchBar(country)}
                  >
                    {country.name}
                  </div>
                );
              })
              .slice(0, 5)
          : ""}

        {activity.countries?.map((country) => {
          return (
            <button
              key={country.name}
              onClick={() => handleDeleteActivity(country.name)}
            >
              {country.name}
            </button>
          );
        })}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PostActivity;
