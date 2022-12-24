import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-16">
      <ul className="flex gap-6 h-16">
        <li className="list-none">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="list-none">
          <NavLink to={"/competition"}>Competition</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
