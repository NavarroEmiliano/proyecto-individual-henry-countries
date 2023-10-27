/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Card = ({ id, name, flagname, continent, population }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <img src={flagname} alt={name} />
        <h2>Nombre: {name}</h2>
        <h2>Continente: {continent}</h2>
        <h2>Poblacion: {population}</h2>
      </Link>
    </div>
  );
};

export default Card;
