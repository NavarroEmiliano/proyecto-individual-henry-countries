import axios from "axios";
const postUser = async (user) => {
  const endpoint = "http://localhost:3001/user";
  try {
    const { data } = await axios.post(endpoint, user);

    return data;
  } catch (error) {
    return error.message;
  }
};

export default postUser;
