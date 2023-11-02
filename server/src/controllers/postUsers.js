const { Users } = require("../db");

const postUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const createUser = await Users.create({
        name,
        email,
        password,
      });

      return res.status(200).send("Usuario creado con exito")
    }

    return res.status(400).send("Faltan datos para crear el usuario")
  } catch (error) {
    return res.status(400).send(
      error.message
    )
  }
};

module.exports = {
  postUsers,
};
