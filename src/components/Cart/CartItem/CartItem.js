import React from 'react';
import classes from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CartItem = (props) => {
  const style = {
    margin: '0 auto',
    textTransform:'capitalize'
  }
  const {img, title, price, count, total} = props.product
  return (
    <div className='row'>
{/* ---------------- 1st col ------------------- */}        
      <div className='col-10 col-lg-2 Center' style={style}>
        <img src={img} alt='product' className={classes.Img} style={{width:'5rem', height: '5rem'}}/>
      </div>
{/* ---------------- 2nd col ------------------- */}        
      <div className='col-10 col-lg-2 Center' style={style}>
        <span className='d-lg-none'>product: </span>
        {title}
      </div>  
{/* ---------------- 3rd col ------------------- */}        
      <div className='col-10 col-lg-2 Center' style={style}>
        <span className='d-lg-none'>price: </span>
        {price}
      </div>  
{/* ---------------- 4th col ------------------- */}        
      <div className='col-10 col-lg-2 Center' style={style}>
        <button 
          className={classes.Btn} 
          onClick={props.decrement}
          disabled={count === 1 ? true: false}>-</button>
        <button className={classes.Btn}>{count}</button>
        <button className={classes.Btn} onClick={props.increment}>+</button>
      </div>
{/* ---------------- 5th col ------------------- */}        
      <div className='col-10 col-lg-2 Center' style={style}>
        <FontAwesomeIcon 
          icon='trash-alt' className={classes.RemoveIcon}
          onClick={props.removed}/>
      </div>
{/* ---------------- 6th col ------------------- */}        
      <div className='col-10 col-lg-2 Center' style={style}>
      <span className='d-lg-none'>item total: </span>
        {total}
      </div>
    </div>
  );
}

export default CartItem;