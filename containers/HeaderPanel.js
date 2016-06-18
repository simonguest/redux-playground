import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'
import {add} from '../actions/todos'

const mapDispatchToProps = (dispatch) => {
  return {
    add: (id) => {
      dispatch(add(id));
    }
  }
};

const HeaderPanel = connect((state) => {return state},mapDispatchToProps)(Header);

export default HeaderPanel;