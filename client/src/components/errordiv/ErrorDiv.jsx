/* eslint-disable react/prop-types */
import styles from "./ErrorDiv.module.css";
const ErrorDiv = ({ error }) => {
  return (
    <div className={styles.error__div}>
      {error && <p style={{ color: "red", opacity: 0.8,textShadow:"2px 2px 5px black" }}>{error}</p>}
    </div>
  );
};

export default ErrorDiv;
