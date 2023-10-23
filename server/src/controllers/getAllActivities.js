const getAllActivities = (req,res)=>{
  return res.status(200).send("Retornando todas las actividades")
}

module.exports = {
  getAllActivities
}