import React from 'react';
import classes from './Sidedrawer.module.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';
import CartBtn from '../CartBtn/CartBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from './../../UI/Backdrop/Backdrop';
const Sidedrawer = (props) => {
  const assigned = [classes.Drawer];
  if(!props.show){
    assigned.push(classes.Close)
  }else{
    assigned.push(classes.Open)
  }
  return (
    <>
{/*--------------- backdrop ---------------- */}
      <Backdrop closed={props.closed} show={props.show}/>
{/* ---------------sidedrawer ---------------*/}
      <nav className={assigned.join(' ')} onClick={props.closed}>
        <div className={classes.CloseBtn}>
          <FontAwesomeIcon icon='times'/>
        </div>
        <Link to='/' className={classes.TxtCenter} style={{marginTop: '6.25rem', display: 'block'}}>
          <Logo logoType='DrawerLogo'/>
        </Link>
          <div className={classes.TxtCenter}>
            <NavItem />
          </div>
        <Link to='/cart' className={classes.TxtCenter}>
          <CartBtn />
        </Link>
      </nav>
    </>
  );
}
export default Sidedrawer;