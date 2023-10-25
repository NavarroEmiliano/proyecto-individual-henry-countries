const { Activity } = require("../db");

const getAllActivities = async (req, res) => {
  try {
    const allActivities = await Activity.findAll();

    if (allActivities.length > 0) return res.status(200).send(allActivities);
    return res.status(404).send("No hay actividades")
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  getAllActivities,
};
