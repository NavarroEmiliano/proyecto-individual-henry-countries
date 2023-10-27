/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Card from "../card/Card";

const Cards = ({ allCountries }) => {

  useEffect(() => {
    
  }, [allCountries])
  
  return (
    <div>
      <h2>Cards</h2>
      {allCountries.map(({ id, name, flagname, continent ,population}) => (
        <Card
          id={id}
          key={id}
          name={name}
          flagname={flagname}
          continent={continent}
          population={population}
        />
      ))}
    </div>
  );
};

export default Cards;
