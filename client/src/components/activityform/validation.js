const validation = (
  { name, season, duration, difficulty, countries },
  allActivities,editIsTrue
) => {
  const errors = {};

  if (!name) {
    errors.name = "El campo no puede estar vacío";
  }

  if (name.length > 25) {
    errors.name = "El nombre no puede superar los 25 caracteres";
  }

  if (/\d/.test(name)) {
    errors.name = "El nombre no puede contener números";
  }

  if (/[^a-zA-Z0-9\s]/.test(name)) {
    errors.name = "No puede contener caracteres especiales";
  }

  if (allActivities.some((activity) => activity.name === name) && !editIsTrue) {
    errors.name = "Ya existe esta actividad";
  }

  if (!season) {
    errors.season = "Debes elejir una estación del año";
  }

  if (!/\d/.test(duration)) {
    errors.duration = "Este campo solo permite números";
  }

  if (duration < 1 || duration > 8) {
    errors.duration = "La duración debe estar entre 1 y 8 horas";
  }
  if (!duration) {
    errors.duration = "El campo no puede estar vacío";
  }
  if (!/\d/.test(difficulty)) {
    errors.difficulty = "Este campo solo permite números";
  }

  if (difficulty < 1 || difficulty > 5) {
    errors.difficulty = "La duración debe estar entre 1 y 5";
  }
  if (!difficulty) {
    errors.difficulty = "El campo no puede estar vacío";
  }

  if (countries.length === 0) {
    errors.countries = "Debes elegir al menos un país";
  }

  return errors;
};

export default validation;
