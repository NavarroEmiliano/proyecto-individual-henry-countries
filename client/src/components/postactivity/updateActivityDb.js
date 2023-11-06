import axios from "axios";

const updateActivity = async (activity) => {
  const RUTA = "http://localhost:3001";
  const endpoint = `${RUTA}/activities`;
  try {
    const response = await axios.put(endpoint, activity);
    return response;
  } catch (error) {
    return error.message;
  }
};

export default updateActivity;