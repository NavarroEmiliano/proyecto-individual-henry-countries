import axios from "axios";

const postActivityDb = async (activity) => {
  const RUTA = "http://localhost:3001";
  const endpoint = `${RUTA}/activities`;
  try {
    const response = await axios.post(endpoint, activity);
    return response;
  } catch (error) {
    return error.message;
  }
};

export default postActivityDb;
