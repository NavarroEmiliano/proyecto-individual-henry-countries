import { Link } from "react-router-dom"
import styles from "./LandingPage.module.css"
const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Bienvenido</h1>
      <Link to={"/home"}>
        <button className={styles.button}>Ingresar</button>
      </Link>
    </div>
  )
}

export default LandingPage