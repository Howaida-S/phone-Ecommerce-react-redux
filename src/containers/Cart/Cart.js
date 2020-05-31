import React , {Component} from 'react';
import { connect } from 'react-redux';
import Title from './../../components/UI/Title/Title';
import CartColTitles from './../../components/Cart/CartColTitles/CartColTitles';
import CartItem from '../../components/Cart/CartItem/CartItem';
import CartTotals from '../../components/Cart/CartTotals/CartTotals';
import CartEmpty from './../../components/Cart/CartEmpty/CartEmpty';
import * as Action from '../../store/actions/index';
class Cart extends Component {
  render() {
    let cartItems;
    if(this.props.cart){
      cartItems = this.props.cart.map((item, index) => {
        return (
          <CartItem 
            key = {index}
            product = {item}
            increment = {() => this.props.onCountIncrement(item)}
            decrement = {() => this.props.onCountDecrement(item)}
            removed = {() => this.props.onRemoveItem(item.id)}/>
        )
      })
    }
    return (
      <>
      {this.props.cart.length === 0 ? <CartEmpty/> :
      (
        <div className='container-fluid ' style={{textAlign: 'center'}}>
        <Title name='your' title='cart'/>
        <CartColTitles />
        {cartItems}
        <CartTotals 
          cartSubTotal = {this.props.cartSubTotal}
          cartTax = {this.props.cartTax}
          cartTotal = {this.props.cartTotal}
          clearCart={()=> this.props.onClearCart()}
          history={this.props.history}/> {/* history needed in paypal btn */}
      </div>
      )
      }
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    cartSubTotal: state.cartSubTotal,
    cartTax: state.cartTax,
    cartTotal: state.cartTotal
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onCountIncrement: (product) => dispatch(Action.countIncrement(product)),
    onCountDecrement: (product) => dispatch(Action.countDecrement(product)),
    onRemoveItem: (id) => dispatch(Action.removeItem(id)),
    onClearCart: () => dispatch(Action.clearCart())
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);