import { useLocation } from "react-router-dom";
import Button from "../button/Button";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Nav.module.css";
import PageIcon from "../pageicon/PageIcon";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.nav__left}>
        <PageIcon className={styles.icon}/>
        <Button to="/home" text="Home" />
        <Button to="/activity" text="Actividades" />
      </div>
      <div className={styles.nav_rigth}>
      {pathname === "/home" && <SearchBar />}
      </div>
    </div>
  );
};

export default Nav;
