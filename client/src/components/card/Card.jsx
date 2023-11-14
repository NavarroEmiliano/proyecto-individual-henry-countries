/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
const Card = ({ id, name, flagname, continent, population }) => {
  return (
    <Link to={`/detail/${id}`} className={styles.link}>
      <div className={styles.container}>
        <img src={flagname} alt={name} />
        <h2>Nombre: {name}</h2>
        <h2>Continente: {continent}</h2>
      </div>
    </Link>
  );
};

export default Card;
