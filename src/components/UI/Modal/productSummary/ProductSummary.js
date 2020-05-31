import React from 'react';
import classes from './ProductSummary.module.css';
import Button from './../../Button/Button';
import { Link } from 'react-router-dom';
const productSummary = (props) => {
  return (
    <div className={classes.Summary}>
      <h3 style={{margin: '1rem'}}> item added to the cart</h3>
        <img src={props.img} className='Img' alt='product' width='100%'/>
      <h3>{props.title}</h3>
      <h3 className={classes.Price}>price: ${props.price}</h3>
      <Link to='/'>
        <Button btnType='BackTops' clicked={props.closed}>continue shopping</Button>
      </Link>
      <Link to='/cart'>
        <Button btnType='addToCart' clicked={props.closed}>go to the cart</Button>
      </Link>
    </div>
  );
}

export default productSummary;