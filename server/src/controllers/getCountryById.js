const { Country, Activity } = require("../db");

const getCountryById = async (req, res) => {
  try {
    const { idPais } = req.params;

    if (idPais) {
      const countryId = await Country.findByPk(idPais, {
        include: {
          model: Activity,
          through: { attributes: [] },
        },
      });

      if (!countryId) return res.status(404).send("Not found");

      return res.status(200).send(countryId);
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  getCountryById,
};
