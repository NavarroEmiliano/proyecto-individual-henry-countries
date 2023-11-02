const { Activity } = require("../db");

const getAllActivitiesDb = async () => {
  const allActivities = await Activity.findAll();

  if (allActivities.length) return allActivities;
  throw new Error("No hay actividades");
};

module.exports = {
  getAllActivitiesDb,
};
