/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
const Card = ({ id, name, flagname, continent, population }) => {
  return (
    <div className={styles.container}>
      <Link to={`/detail/${id}`} className={styles.link}>
        <img src={flagname} alt={name} />
        <h2>Nombre: {name}</h2>
        <h2>Continente: {continent}</h2>
        <h2>Poblacion: {population}</h2>
      </Link>
    </div>
  );
};

export default Card;
