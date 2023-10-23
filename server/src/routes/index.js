const { Router } = require("express");
const router = Router();

//Controllers
const { getAllCountries } = require("../controllers/getAllCountries");
const { getCountryById } = require("../controllers/getCountryById");
const { postActivities } = require("../controllers/postActivities");
const { getAllActivities } = require("../controllers/getAllActivities");

router.get("/countries", getAllCountries);
router.get("/countries/:idPais", getCountryById);

router.get("/activities", getAllActivities);

router.post("/activities", postActivities);

module.exports = router;
