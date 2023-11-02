import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllCountries, getAllActivities } from "../../redux/actions";
import Cards from "../cards/Cards";

import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(addAllCountries());
      dispatch(getAllActivities())
  }, []);

  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
};

export default Home;
