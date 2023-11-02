import { Link } from "react-router-dom"
import Button from "../button/Button"
const LandingPage = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Button to="/register" text="Registrate"/>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
    </div>
  )
}

export default LandingPage