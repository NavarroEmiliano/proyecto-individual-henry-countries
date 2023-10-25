const { Activity } = require("../db");

const postActivities = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryId } = req.body;
    if (name && difficulty && duration && season && countryId) {
      const postActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });

      // Relaciona la actividad con todos los países de una vez
      await postActivity.setCountries(countryId);

      return res.status(200).json(postActivity);
    }
    return res.status(404).send("Información incompleta");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  postActivities,
};
