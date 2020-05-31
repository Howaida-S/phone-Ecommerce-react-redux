import React from 'react';
import classes from './Product.module.css';
import{ Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Product = (props) => {
  const {title, img, price, inCart} = props.product;
  return (
    <div className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
      <div className={classes.Card}>
        <div className={classes.imgContainer} >
          <Link to='/details' onClick={props.fetchDetail}>
            <img src={img} alt='product' className={classes.CardImg}/>
          </Link>
          <button 
            onClick= {props.addToCart}
            className = {classes.CartBtn}
            disabled = {inCart? true : false}>
              {inCart?<p>inCart</p> :<FontAwesomeIcon icon='cart-plus'/>} 
          </button>
        </div>
        <div className={classes.Footer}>
          <p>{title}</p>
          <h5> <span>$</span> 
            {price}
          </h5>
        </div>  
      </div>
    </div>
  );
}

export default Product;