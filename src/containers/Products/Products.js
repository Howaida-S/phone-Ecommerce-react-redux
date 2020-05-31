import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../store/actions/index';
import Title from './../../components/UI/Title/Title';
import Product from './../../components/Product/Product';
import Spinner from './../../components/UI/Spinner/Spinner';
class Products extends Component {
  componentDidMount(){
    if(this.props.cart.length === 0){
      this.props.onFetchProducts();
    }
  }

  render() {
    let product = <Spinner />;
    if (this.props.products){
      product = this.props.products.map(product => {
        return <Product 
        key={product.id}
        product={product}
        fetchDetail={()=>this.props.onFetchDetail(product.id)}
        addToCart = {() => this.props.onAddedToCart(product)}/>
      })
    }
    return (
        <div className='container'>
          <Title name='our' title='products'/>
          <div className='row'>
            {product}
          </div>
        </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
    loading: state.loading,
    error: state.error,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts:() => dispatch(Action.fetchProducts()),
    onFetchDetail: (id) => dispatch(Action.fetchDetail(id)),
    onAddedToCart: (product) => dispatch(Action.addToCart(product)),
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);