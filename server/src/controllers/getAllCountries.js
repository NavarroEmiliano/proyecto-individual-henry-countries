const getAllCountries = (req, res) => {
  const {name} = req.query;
  if(name){
    return res.status(200).send(name)

  }
  return res.status(200).send("Retornando todos los paises")
}

module.exports = {
  getAllCountries
}
