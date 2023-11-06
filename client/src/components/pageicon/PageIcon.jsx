/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import earth from "../../assets/earth.png"
import styles from "./PageIcon.module.css";
const PageIcon = () => {
  return (
    <Link to={"/"}>
      <img src={earth} alt="earth" className={styles.icon}/>
    </Link>
  );
};

export default PageIcon;
