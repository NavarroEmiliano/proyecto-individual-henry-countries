/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Button.module.css"

const Button = ({ to, text }) => {
  return (
    <Link to={to}>
      <button className={styles.btn}>{text}</button>
    </Link>
  );
};

export default Button;
