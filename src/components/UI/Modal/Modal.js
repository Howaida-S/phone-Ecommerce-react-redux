import React, {Component} from 'react';
import classes from './Modal.module.css'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Backdrop from './../Backdrop/Backdrop';
import ProductSummary from './productSummary/ProductSummary';
class Modal extends Component {
  render() {
    const animationTiming = {
      enter: 400,
      exit: 1000
    }
    const style = {
      margin: '0 auto',
      textAlign: 'center',
      textTransform: 'capitalize',
      backgroundColor: 'white',
      padding: '2rem',
    }
    let summary;
    if(this.props.orderedProduct){
      summary = <ProductSummary 
        img ={this.props.orderedProduct.img}
        title={this.props.orderedProduct.title}
        price={this.props.orderedProduct.price}/>
      }
    return (
      <>
        <Backdrop show={this.props.show} closed={this.props.closed}/>
        <CSSTransition
        in={this.props.show}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: '',
          enterActive: classes.ModalOpen,
          exit: '',
          exitActive: classes.ModalClosed,
        }}>
          <div className={classes.Main} onClick={this.props.closed}>
            <div className='container'>
              <div className='row'>
                <div className='col-8 col-md-6 col-lg-4 ' style={style}>
                  {summary}
                </div>
                </div>
              </div>
            </div>
        </CSSTransition> 
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    orderedProduct: state.orderedProduct
  }
}
export default connect(mapStateToProps)(Modal);