import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

function PageNav({ userType }) {
  return (
    <nav className="flex items-center justify-between">
      <Logo />

      <ul className="flex items-center list-none gap-16">
        <li className="link">
          <NavLink to="/feedback">Feedback</NavLink>
        </li>

        <NavDropdown />
      </ul>
    </nav>
  );
}

export default PageNav;
