const { Op } = require("sequelize");
const { Country } = require("../db");

const getAllCountries = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const countryFinded = await Country.findOne({
        where: {
          name: {
            [Op.iLike]: `${name}`,
          },
        },
      });

      if (!countryFinded) return res.status(404).send("Not found");

      return res.status(200).send(countryFinded);
    }

    const allCountries = await Country.findAll();
    return res.status(200).send(allCountries);
    
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  getAllCountries,
};
