import axios from "axios";

const postActivityDb = async (activity) => {
  const endpoint = "http://localhost:3001/activities";
  try {
    const response = await axios.post(endpoint, activity);
    return response;
  } catch (error) {
    return error.message;
  }
};

export default postActivityDb;
