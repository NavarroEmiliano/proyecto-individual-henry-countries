import Button from "../button/Button";
import styles from"./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <Button to="/home" text="Home" />
    </div>
  );
};

export default Nav;
