import { useSelector } from "react-redux";
import styles from "./PostActivity.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllCountries, getAllActivities } from "../../redux/actions";
import SearchBar from "../searchbar/SearchBar";
import postActivityDb from "./postActivityDb";
import ActivityBar from "../activitybar/ActivityBar";
import { SEASONS } from "../../lib/constants";
import updateActivity from "./updateActivityDb";
import { RESET_ACTIVITY_STATE } from "../../lib/constants";
import validation from "./validation";

const PostActivity = () => {
  const dispatch = useDispatch();

  const [activity, setActivity] = useState({
    id: null,
    name: "",
    season: "",
    duration: "",
    difficulty: "",
    countries: [],
  });

  const [editIsTrue, setEditIsTrue] = useState(false);

  const [errors, setErrors] = useState({});

  const { filteredCountries, allActivities, allCountries } = useSelector(
    (state) => state
  );

  let isShowSearchResults = filteredCountries.length < allCountries.length;

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

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    const countryId = activity.countries.map((country) => country.id);
    const { name, season, duration, difficulty } = activity;

    const response = await postActivityDb({
      name,
      season,
      duration,
      difficulty,
      countryId,
    });
    setActivity(RESET_ACTIVITY_STATE);
    dispatch(getAllActivities());
    console.log(response);
  };

  const handleEditOption = () => {
    setEditIsTrue(false);
    setActivity(RESET_ACTIVITY_STATE);
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    const countryId = activity.countries.map((country) => country.id);
    const { id, name, season, duration, difficulty } = activity;
    const response = await updateActivity({
      id,
      name,
      season,
      duration,
      difficulty,
      countryId,
    });
    console.log(response);
    setActivity(RESET_ACTIVITY_STATE);
    dispatch(getAllActivities());
  };

  useEffect(() => {
    dispatch(addAllCountries());
    setErrors(validation(activity, allActivities));
  }, [allActivities, activity]);

  return (
    <div className={styles.container}>
      <div className={styles.form__middle}>
        {editIsTrue && (
          <button onClick={handleEditOption} className={styles.create__btn}>
            Volver a crear actividad
          </button>
        )}
        <form
          onSubmit={editIsTrue ? handleUpdateSubmit : handlePostSubmit}
          className={styles.form__container}
        >
          <h2>{editIsTrue ? "Actualizar actividad" : "Crear actividad"}</h2>
          <label htmlFor="name">Nombre: </label>
          <input
            name="name"
            type="text"
            value={activity.name}
            onChange={handleStateActivity}
          />
          <div>
            {errors.name !== "" && (
              <p style={{ color: "red", opacity: 0.8 }}>{errors.name}</p>
            )}
          </div>
          <br />
          <label htmlFor="season">Estación: </label>
          <select
            name="season"
            id=""
            value={activity.season}
            onChange={handleStateActivity}
          >
            <option value=""></option>
            {SEASONS.map((season) => (
              <option key={crypto.randomUUID()} value={season}>
                {season}
              </option>
            ))}
          </select>
          <div>{errors.season}</div>
          <br />
          <label htmlFor="duration">Duración: </label>
          <input
            name="duration"
            type="text"
            value={activity.duration}
            onChange={handleStateActivity}
          />
          <div>{errors.duration}</div>
          <br />
          <label htmlFor="difficulty">Dificultad: </label>
          <input
            name="difficulty"
            type="text"
            value={activity.difficulty}
            onChange={handleStateActivity}
          />
          <div>{errors.difficulty}</div>
          <br />
          <label htmlFor="countries">Pais: </label>
          <SearchBar className={styles.searchbar} />
          <div>{errors.countries}</div>

          {isShowSearchResults &&
            filteredCountries.slice(0, 5).map((country) => (
              <div key={country.name} onClick={() => handleSearchBar(country)}>
                {country.name}
              </div>
            ))}

          <div className={styles.countries__buttons}>
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
          </div>
          <br />
          <button disabled={Object.keys(errors).length !== 0}>
            {editIsTrue ? "Actualizar" : "Crear"}
          </button>
        </form>
      </div>
      <div className={styles.activities__container}>
        {allActivities?.map((e) => (
          <ActivityBar
            key={e.name}
            id={e.id}
            name={e.name}
            setActivity={setActivity}
            setEditIsTrue={setEditIsTrue}
          />
        ))}
      </div>
    </div>
  );
};

export default PostActivity;
