const postActivities = (req,res)=>{
  return res.status(200).send("Enviando actividades por body")
}

module.exports={
  postActivities
}