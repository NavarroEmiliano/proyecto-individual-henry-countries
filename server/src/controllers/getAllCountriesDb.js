const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getAllCountriesDb = async (name) => {
  if (name) {
    // Búsqueda por nombre, incluyendo actividades.
    const countryFinded = await Country.findOne({
      where: {
        name: {
          [Op.iLike]: `${name}`,
        },
      },
      include: {
        model: Activity, // Incluye el modelo Activity
        through: { attributes: [] },
      },
    });

    if (!countryFinded) throw new Error("No se encontro un pais por Query");

    return countryFinded;
  }

  // Búsqueda de todos los países, incluyendo actividades.
  const allCountries = await Country.findAll({
    include: {
      model: Activity, // Incluye el modelo Activity
      through: { attributes: [] },
    },
  });

  return allCountries;
};

module.exports = {
  getAllCountriesDb,
};
