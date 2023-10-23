const getCountryById = (req,res)=>{
  return res.status(200).send("Retornando pais por Id")
}

module.exports = {
  getCountryById
}