import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const [country, setCountry] = useState({});

  const [imageLoaded, setImageLoaded] = useState(false);

  const params = useParams();
  const RUTA = "http://localhost:3001";
  useEffect(() => {
    const findCountry = async () => {
      try {
        const { data } = await axios.get(`${RUTA}/countries/${params?.id}`);
        if (data) {
          setCountry(data);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    };

    findCountry();
  }, []);

  console.log(country.Activities);

  return (
    <div className={styles.container}>
      <div className={styles.coat__div}>
        {country.coat !== "undefined" ? (
          <div>
            <h2>Escudo de armas</h2>
            {!imageLoaded && <div className={styles.loading}>Cargando...</div>}
            <img
              src={country?.coat}
              alt=""
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        ) : (
          <h2>No contiene escudo</h2>
        )}
      </div>

      <div className={styles.detail__div}>
        <div className={styles.detail}>
          <img src={country?.flagname} alt={country?.name} />
          <h2>Pais: {country?.name}</h2>
          <h2>Id: {country?.id}</h2>
          <h2>Area: {country?.area}</h2>
          <h2>Capital: {country?.capital}</h2>
          <h2>Población: {country?.population}</h2>
          <h2>Subregion: {country?.subregion}</h2>
          <h2>Continente: {country?.continent}</h2>
        </div>
      </div>
      {country?.Activities?.length > 0 && (
        <div className={styles.activities__div}>
          {country.Activities.map((country) => (
            <div key={country.name}  className={styles.activity}>
              <h2>Actividad: {country.name}</h2>
              <h2>Dificultad: {country.difficulty}</h2>
              <h2>Estación: {country.season}</h2>
              <h2>Duracion: {country.duration}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Detail;
