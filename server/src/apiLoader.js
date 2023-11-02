const axios = require("axios");
const { Country } = require("./db");

const apiLoader = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/countries");
    data.forEach(
      async ({
        cca3,
        name,
        flags,
        continents,
        capital,
        subregion,
        area,
        population,
      }) => {
        await Country.findOrCreate({
          where: {
            id: cca3,
            name: name?.common,
            flagname: flags?.png,
            continent: continents ? continents[0] : "undefined",
            capital: capital ? capital[0] : "undefined",
            subregion: subregion ? subregion : "undefined",
            area: Math.round(area),
            population: population,
          },
        });
      }
    );

    console.log("Carga en la base de datos exitosa");
  } catch (error) {
    throw new Error("Carga de datos fallida");
  }
};

module.exports = {
  apiLoader,
};
