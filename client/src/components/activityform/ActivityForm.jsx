import { useSelector, useDispatch } from "react-redux";
import styles from "./ActivityForm.module.css";
import { useState, useEffect } from "react";
import {
  addAllCountries,
  getAllActivities,
  getCountriesFromInputForm,
} from "../../redux/actions";
import postActivityDb from "./postActivityDb";
import ActivityBar from "../activitybar/ActivityBar";
import { SEASONS } from "../../lib/constants";
import updateActivity from "./updateActivityDb";
import { RESET_ACTIVITY_STATE } from "../../lib/constants";
import validation from "./validation";
import ErrorDiv from "../errordiv/ErrorDiv";
import Modal from "../modal/modal";
import showModal from "./showModal";

const ActivityForm = () => {
  const dispatch = useDispatch();

  const [activity, setActivity] = useState({
    id: null,
    name: "",
    season: "",
    duration: "",
    difficulty: "",
    countryFilter: "",
    countries: [],
  });

  const [editIsTrue, setEditIsTrue] = useState(false);

  const [errors, setErrors] = useState({});

  const [modal, setModal] = useState({
    show: false,
    message: "",
  });

  const { allActivities, allCountries, inputFormFilter } = useSelector(
    (state) => state
  );

  let isShowSearchResults = inputFormFilter.length < allCountries.length;

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
    showModal(response.status, "Actividad creada con éxito", setModal);
    dispatch(getAllActivities());
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
    setActivity(RESET_ACTIVITY_STATE);
    showModal(response.status, "Actividad actualizada con éxito", setModal);
    dispatch(getAllActivities());
  };

  useEffect(() => {
    if (!allCountries.length) dispatch(addAllCountries());
    dispatch(getCountriesFromInputForm(activity.countryFilter));
    setErrors(validation(activity, allActivities, editIsTrue));
    dispatch(getAllActivities());
  }, [activity, modal]);

  return (
    <div className={styles.container}>
      <div className={styles.form__middle}>
        <form
          onSubmit={editIsTrue ? handleUpdateSubmit : handlePostSubmit}
          className={styles.form__container}
        >
          <h2 className={styles.form__title}>
            {editIsTrue ? "Actualizar actividad" : "Crear actividad"}
          </h2>
          <label htmlFor="name">Nombre: </label>
          <input
            name="name"
            type="text"
            value={activity.name}
            onChange={handleStateActivity}
          />

          <ErrorDiv error={errors.name} />

          <label htmlFor="duration">Duración: </label>
          <input
            name="duration"
            type="text"
            value={activity.duration}
            onChange={handleStateActivity}
          />
          <ErrorDiv error={errors.duration} />
          <label htmlFor="difficulty">Dificultad: </label>
          <input
            name="difficulty"
            type="text"
            value={activity.difficulty}
            onChange={handleStateActivity}
          />
          <ErrorDiv error={errors.difficulty} />

          <label htmlFor="season">Estación: </label>
          <select
            name="season"
            id=""
            value={activity.season}
            onChange={handleStateActivity}
            className={styles.season__select}
          >
            <option value="">Selecciona una estación</option>
            {SEASONS.map((season) => (
              <option key={crypto.randomUUID()} value={season}>
                {season}
              </option>
            ))}
          </select>
          <ErrorDiv error={errors.season} />
          <label htmlFor="countries">País: </label>
          <input
            type="text"
            name="countryFilter"
            value={activity.countryFilter}
            onChange={handleStateActivity}
          />
          <ErrorDiv error={errors.countries} />

          <div className={styles.results__div}>
            <div className={styles.search__results}>
              {isShowSearchResults &&
                inputFormFilter.slice(0, 3).map((country) => (
                  <div
                    key={country.name}
                    onClick={() => handleSearchBar(country)}
                    className={styles.country__finded}
                  >
                    {country.name}
                  </div>
                ))}
            </div>
            <div className={styles.countries__buttons}>
              {activity.countries?.map((country) => {
                return (
                  <button
                    key={country.name}
                    className={styles.country__btn}
                    onClick={() => handleDeleteActivity(country.name)}
                  >
                    {country.name}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            disabled={Object.keys(errors).length !== 0}
            className={styles.submit__btn}
          >
            {editIsTrue ? "Actualizar" : "Crear"}
          </button>
        </form>
        {editIsTrue && (
          <button onClick={handleEditOption} className={styles.create__btn}>
            Volver a crear actividad
          </button>
        )}
      </div>

      <div className={styles.activities__container}>
        <h2>Lista de actividades</h2>
        {allActivities.length > 0 ? allActivities.map((e) => (
          <ActivityBar
            key={e.name}
            id={e.id}
            name={e.name}
            setActivity={setActivity}
            setEditIsTrue={setEditIsTrue}
          />
        )): <h3>No hay actividades</h3>}
      </div>
      {modal.show && <Modal message={modal.message} />}
    </div>
  );
};

export default ActivityForm;
