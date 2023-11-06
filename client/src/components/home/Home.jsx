import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllCountries, getAllActivities } from "../../redux/actions";
import Cards from "../cards/Cards";

import styles from "./Home.module.css";

const Home = () => {
  const { allCountries } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
if (allCountries.length === 0) {
  dispatch(addAllCountries());
  
}
dispatch(getAllActivities()); 
  }, []);

  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
};

export default Home;
