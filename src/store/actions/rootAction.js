import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
/*--------------------- fetch products from the server -----------------*/
export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START
  }
}
export const fetchProductsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: data
  }
}
export const fetchProductsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: error
  }
}
export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsStart()); 
      axios.get( '/products.json' )
      .then( res => {
        const fetchedProducts = [];
        for ( let key in res.data ) { // to convert obj (res.data) into array 
          fetchedProducts.push( {
            ...res.data[key], // distribute old properties
            id: key // add a new property 
          } );
        }
        dispatch(fetchProductsSuccess(fetchedProducts));
      } )
      .catch( error => {
        dispatch(fetchProductsFail(error));
      } );
  };
};
/*------------- fetch detailed information of specific product ----------*/
export const fetchDetail = (id) => {
  return {
    type: actionTypes.FETCH_DETAIL,
    productId: id
  }
}

/*------------------------------- add to cart ---------------------------*/
export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    product: product, 
  }
}
/*---------------------------- close modal ---------------------------*/
export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  }
}

/*-------------------------- count increment -------------------------*/
export const countIncrement = (product) => {
  return {
    type: actionTypes.COUNT_INCREMENT,
    product: product
  }
}
/*-------------------------- count decrement -------------------------*/
export const countDecrement = (product) => {
  return {
    type: actionTypes.COUNT_DECREMENT,
    product: product
  }
}
/*-------------------------- count remove item -----------------------*/
export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id: id
  }
}
/*----------------------------- clear cart  --------------------------*/
export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  }
}