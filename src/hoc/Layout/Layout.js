import React, { Component } from 'react';
import ToolBar from './../../components/Navigations/Toolbar/ToolBar';
import Sidedrawer from './../../components/Navigations/Sidedrawer/Sidedrawer';
import Modal from '../../components/UI/Modal/Modal';
import * as Action from '../../store/actions/index';
import { connect } from 'react-redux';
class Layout extends Component {
  state = {
    show: false  // responsible for showing or hide sidedrawer
  }
  toggleHandler = () => {
    this.setState(prevState => {
      return {show: !prevState.show}
    })
  }
  render() {
    return (
      <>
        <ToolBar opened={this.toggleHandler}/>
        <Sidedrawer show={this.state.show} closed={this.toggleHandler}/>
        <Modal show={this.props.show} closed = {() => this.props.onCloseModal()}/>
        <main>
          {this.props.children}
        </main>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    show: state.showModal
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch(Action.closeModal())
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
