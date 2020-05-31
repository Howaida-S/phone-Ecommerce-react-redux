import React from 'react';
import classes from './NavItem.module.css';
import {Link} from 'react-router-dom';
const navItem = () => (
  <ul className={classes.NavItem}>
    <li>
      <Link to='/' className={classes.NavLink}>products</Link>
    </li>
  </ul>  
)

export default navItem;