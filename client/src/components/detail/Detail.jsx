import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [country, setCountry] = useState({});
  const params = useParams();

  useEffect(() => {
    const findCountry = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/countries/${params?.id}`
        );
        if (data) {
          setCountry(data);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    };

    findCountry();
  }, []);

  return (
    <div>
      <h2>Pais: {country?.name}</h2>
      <h2>Id: {country?.id}</h2>
      <h2>Area: {country?.area}</h2>
      <h2>Capital: {country?.capital}</h2>
      <h2>Población: {country?.population}</h2>
      <h2>Subregion: {country?.subregion}</h2>
      <h2>Continente: {country?.continent}</h2>
      <img src={country?.flagname} alt={country?.name} />
    </div>
  );
};

export default Detail;
