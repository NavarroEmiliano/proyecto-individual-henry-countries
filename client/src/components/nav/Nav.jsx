import { useLocation } from "react-router-dom";
import Button from "../button/Button";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Nav.module.css";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <Button to="/home" text="Home" />
      <Button to="/activity" text="Actividades" />
      {pathname === "/home" && <SearchBar />}
    </div>
  );
};

export default Nav;
