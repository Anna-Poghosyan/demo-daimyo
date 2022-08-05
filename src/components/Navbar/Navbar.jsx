import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile"
          className={({ isActive }) => isActive ? classes.active : classes.item}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs"
          className={({ isActive }) => isActive ? classes.active : classes.item}>
          Dialogs
        </NavLink>
      </div>
      <div className={classes.item}><a>News</a></div>
      <div className={classes.item}><a>Music</a></div>
      <div className={classes.item}><a>Settings</a></div>
      <div className={classes.item}>
        <NavLink to="/users"
          className={({ isActive }) => isActive ? classes.active : classes.item}>
          Users
        </NavLink>
      </div>
    </nav>

  );
}
export default Navbar;