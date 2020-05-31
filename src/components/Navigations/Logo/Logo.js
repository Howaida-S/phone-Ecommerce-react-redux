import React from 'react';
import classes from './Logo.module.css';
import img from '../../../assets/images/logo.svg';
const logo = (props) => (
  <img src={img} alt='logo' className={classes[props.logoType]}/>
)
export default logo;