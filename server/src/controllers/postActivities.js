const { Activity } = require("../db");

const postActivities = async ({
  name,
  difficulty,
  duration,
  season,
  countryId,
}) => {
  if (name && difficulty && duration && season && countryId) {
    const postActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    // Relaciona la actividad con todos los países de una vez
    await postActivity.setCountries(countryId);

    return postActivity;
  }
  throw new Error("La informacion recibida por body está incompleta");
};

module.exports = {
  postActivities,
};
