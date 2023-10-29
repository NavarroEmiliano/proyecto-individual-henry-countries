import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addAllCountries } from "../../redux/actions";
import Cards from "../cards/Cards";

import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state);

  useEffect(() => {
    if(allCountries.length === 0){
      dispatch(addAllCountries());
    }
  }, []);

  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
};

export default Home;
