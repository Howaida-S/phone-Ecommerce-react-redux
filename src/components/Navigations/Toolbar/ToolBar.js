import React from 'react';
import classes from './Toolbar.module.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';
import CartBtn from '../CartBtn/CartBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const toolBar = (props) =>{
  return (
    <nav className={classes.Navbar}>
      <div onClick={props.opened}>
      <FontAwesomeIcon icon='bars' className={classes.Icon}/>
      </div>
      <Link to='/' className={classes.DrawerDisplay}>
        <Logo />
      </Link>
      <div className={classes.DrawerDisplay} style={{padding: '0 1.25rem'}}>
        <NavItem />
      </div>
      <Link to='/cart' className={classes.DrawerDisplay} style={{marginLeft: 'auto'}}>
        <CartBtn />
      </Link>
    </nav>    
  );
}
export default toolBar;
