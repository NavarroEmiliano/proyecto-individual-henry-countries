import { useState } from "react";
import postUser from "./postUser";

const RegistrationForm = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Estado para el indicador de carga
  const [successMessage, setSuccessMessage] = useState(null); // Estado para el mensaje de éxito
  const [errorMessage, setErrorMessage] = useState(null); // Estado para el mensaje de error

  const handleUser = (event) => {
    setuser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true); // Activar el indicador de carga

    try {
      const response = await postUser(user);

      if (response === "Usuario creado con exito") {
        setSuccessMessage("Usuario creado con éxito");
        setErrorMessage(null);
      } else {
        setSuccessMessage(null);
        setErrorMessage("Fallo al crear usuario");
      }
    } catch (error) {
      setSuccessMessage(null);
      setErrorMessage("Fallo al crear usuario");
    } finally {
      setLoading(false); // Desactivar el indicador de carga
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre </label>
        <input type="text" name="name" value={user.name} onChange={handleUser} />
        <br />
        <label htmlFor="email">Email </label>
        <input type="email" name="email" value={user.email} onChange={handleUser} />
        <br />
        <label htmlFor="password">Password </label>
        <input type="text" name="password" value={user.password} onChange={handleUser} />
        <br />
        <button type="submit">Enviar</button>
      </form>

      {loading && <p>Cargando...</p>}
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
