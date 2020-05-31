import React from 'react';
import Button from './../../UI/Button/Button';
import PayPalBtn from './PayPalBtn';
import { Link } from 'react-router-dom';
const CartTotals = (props) => {
  const style = {
    textAlign: 'right',
    textTransform: 'capitalize'
  }
  return (
    <div className='row'>
    <div className='col col-sm-8 ml-sm-5 ml-md-auto mt-5' 
      style={style}>
      <Link to='/'>
        <Button  
          btnType='ClearBtn'
          clicked ={props.clearCart}>clear cart</Button>
      </Link>
      <h5>
        <span className='text-title'>subtotal: </span>
        <strong>${props.cartSubTotal}</strong>
      </h5>
      <h5>
        <span className='text-title'>tax: </span>
        <strong>${props.cartTax}</strong>
      </h5>
      <h5>
        <span className='text-title'>total: </span>
        <strong>${props.cartTotal}</strong>
      </h5>
{/* we pass some values to paypal buttons 
we'll need clearCart to clear the cart after we make successful purchase 
*/}           
      <PayPalBtn 
        total={props.cartTotal}
        clearCart={props.clearCart}
        history={props.history}/> 
    </div>
    </div>
  );
}

export default CartTotals;