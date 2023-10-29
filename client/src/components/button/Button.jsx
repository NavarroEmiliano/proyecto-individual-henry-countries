/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ to, text }) => {
  return (
    <Link to={to}>
      <button>{text}</button>
    </Link>
  );
};

export default Button;
