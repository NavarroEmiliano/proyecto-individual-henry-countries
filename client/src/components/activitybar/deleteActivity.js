import axios from "axios";

const RUTA = "http://localhost:3001";

const deleteActivity = async(id) =>{
  const endpoint = `${RUTA}/activities/${id}`;
  try {
    const response = await axios.delete(endpoint);
    return response;
  } catch (error) {
    return error.message;
  }
}

export default deleteActivity