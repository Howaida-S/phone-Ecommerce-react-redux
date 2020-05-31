import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';
const initialState = {
  /* ------ products ----- */
  products: [],
  loading: false,
  error: false,
  detailedProduct: null,
  /* ------ cart -------- */
  cart: [],
  showModal: false,
  orderedProduct: null,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0
}; 
/*--------------------- fetch products from the server -----------------*/
const fetchStart = state => {
  return updateObject(state, {loading: true})
}
const fetchSuccess = (state, action) => {
  return updateObject(state, {
    products: action.products,
    loading: false 
  })
}
const fetchFail = (state, action) => {
  return updateObject(state, {loading: false, error: action.error})
}
/*------------------ fetch detailed information of specific product ---------------*/
const fetchDetailedProduct = (state, action) => {
  const product = state.products.find(item => item.id === action.productId);// return obj element
  const detailed = {
    detailedProduct: product
  }
  return updateObject(state, detailed)
}
/*-- normal func used to update totals & called whenever we change
elements in cart by adding, increment , decrement , remove, clear --*/
const addTotals = (cart) => {
  let subTotal = 0 ; 
  cart.map(item => (subTotal += item.total)); // subtotal to get all the item totals 
  const tempTax = subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
  return [subTotal, tax, total] // return more value in the form of array 
}

/*------------------ add specific product to the cart  ---------------*/
const addToCart = (state, action) => {
  const product =  action.product
  product.inCart = true;
  product.count = 1;
  product.total = product.price;
  const updatedCart = [...state.cart, product];// push product obj inside array
  const updatedProduct = [...state.products];
  const [subTotal, tax, total]= addTotals(updatedCart); // get returned values in es6
  const addedProduct = {
    products: updatedProduct,
    cart: updatedCart , 
    showModal: true,
    orderedProduct: product,
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total
  }
  return updateObject(state, addedProduct)
}
/* ------------------- close modal -------------------- */
const closeModal = (state) => {
  return updateObject(state, {showModal: false})
}



/*-------------------------- count increment -------------------------*/
const countIncrement = (state, action) => {
  const product = action.product;
  product.count += 1;
  product.total = product.price * product.count ;
  const updatedCart = [...state.cart];
  const [subTotal, tax, total]= addTotals(updatedCart);
  const updatedSt = {
    cart: updatedCart,
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total
  }
  return updateObject(state, updatedSt)
}

/*-------------------------- count decrement -------------------------*/
const countDecrement = (state, action) => {
  const product = action.product;
  product.count -= 1;
  product.total = product.price * product.count ;
  const updatedCart = [...state.cart];
  const [subTotal, tax, total]= addTotals(updatedCart);
  const updatedSt = {
    cart: updatedCart,
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total
  }
  return updateObject(state, updatedSt)
}

/*-------------------------- count remove item -----------------------*/
const removeItem = (state, action) => {
// we make the opposite of what we did when we add item to cart by addtoCart func 
  let tempCart = [...state.cart];
  tempCart = tempCart.filter(item => item.id !== action.id); // remove it from the cart 
  let tempProducts = [...state.products];
  const product = tempProducts.find(item => item.id === action.id);
  product.inCart = false;
  product.count = 0;
  const [subTotal, tax, total]= addTotals(tempCart);
  const updatedSt = {
    cart: tempCart,
    products: tempProducts,
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total
  }
  return updateObject(state, updatedSt)
}
/*----------------------------- clear cart  --------------------------*/
const clearCart = (state) => {
  const updatedCart = [];
  const [subTotal, tax, total] = addTotals(updatedCart);
  const updateSt = {
    cart: updatedCart,
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total
  }
  return updateObject(state, updateSt)
}


const productReducer = (state = initialState, action) => {
  switch(action.type){
/*------------------------- products -------------------*/
    case actionTypes.FETCH_PRODUCTS_START: return fetchStart(state)
    case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchSuccess(state, action)
    case actionTypes.FETCH_PRODUCTS_FAIL: return fetchFail(state, action)
    case actionTypes.FETCH_DETAIL: return fetchDetailedProduct(state, action)
/* ------------------------- cart ----------------------*/
    case actionTypes.ADD_TO_CART: return addToCart(state, action)
    case actionTypes.CLOSE_MODAL: return closeModal(state)
    case actionTypes.COUNT_INCREMENT: return countIncrement(state, action)
    case actionTypes.COUNT_DECREMENT: return countDecrement(state, action)
    case actionTypes.REMOVE_ITEM: return removeItem(state, action) 
    case actionTypes.CLEAR_CART: return clearCart(state)       
    default: return state;
  }
};
export default productReducer;