import React from 'react';
import classes from './CartBtn.module.css';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cartBtn = () => (
    <Button btnType='CartBtn'>
      <FontAwesomeIcon icon='cart-plus' className={classes.Cart}/>
      my cart
    </Button>
);
export default cartBtn;
