import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="../src/assets/logo.jpg" alt="MANIT logo" className=" h-16"/>
    </Link>
  );
}

export default Logo;
