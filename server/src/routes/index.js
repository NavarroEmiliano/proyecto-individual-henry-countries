const { Router } = require("express");
const router = Router();

//Handlers
const { postUsers } = require("../controllers/postUsers");
const {
  getAllCountriesDbHandler,
} = require("../handlers/getAllCountriesDbHandler");
const {
  getAllActivitiesDbHandler,
} = require("../handlers/getAllActivitiesDbHandler");
const {
  getCountryByIdDbHandler,
} = require("../handlers/getCountryByIdDbHandler");
const { postActivitiesHandler } = require("../handlers/postActivitiesHandler");

router.get("/countries", getAllCountriesDbHandler);
router.get("/countries/:idPais", getCountryByIdDbHandler);

router.get("/activities", getAllActivitiesDbHandler);
router.post("/activities", postActivitiesHandler);

router.post("/user", postUsers);

module.exports = router;
