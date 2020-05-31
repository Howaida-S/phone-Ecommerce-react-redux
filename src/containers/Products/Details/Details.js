import React, { Component } from 'react';
import classes from './Details.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Title from './../../../components/UI/Title/Title';
import Button from './../../../components/UI/Button/Button';
import * as Action from '../../../store/actions/index';
class Details extends Component {
  render() {
    const {img, title, company, price, info, inCart} = this.props.detailed;
    return (
      <>
        <div className='container' style={{padding: '3rem 0'}}>
        <Title title={title}/>
        <div className='row' style={{padding: '0 3rem'}}>
{/* ---------------- img column -------------------*/}
            <div className='col-10 col-md-6' style={{padding: '1rem auto'}}>
              <img src={img} alt='product' className={classes.Img} style={{width:'100%'}}/>
            </div>
{/* ---------------- info column ------------------*/}
            <div className='col-10 col-md-6' 
              style={{margin: '1rem auto', textTransform:'capitalize', textAlign:'center'}}>
              <h2 className={classes.Txt}>model: {title}</h2>
              <h4 className={classes.Company}>made by: {company}</h4>
              <h4 className={classes.Txt}>price: <span>$</span>{price}</h4>
              <p className={classes.SubInfo}>Some Info About Product:</p>
              <p className={classes.Info}>{info}</p>
              <Link to='/'>            
                <Button btnType='BackTops'>back to products</Button>
              </Link>
              <Button
                clicked={() => this.props.onAddedToCart(this.props.detailed)}
                disabled={inCart? true : false}
                btnType='addToCart'>
                {inCart? 'inCart': 'add to cart'}
              </Button>
            </div>
          </div>
      </div>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    detailed: state.detailedProduct,
    cart: state.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddedToCart: (product) => dispatch(Action.addToCart(product)),
    onCloseModal: () => dispatch(Action.closeModal())
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);