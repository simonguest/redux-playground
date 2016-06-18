import React, {Component} from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import HeaderPanel from './HeaderPanel'
import TodoPanel from './TodoPanel'

class App extends Component {

  render() {
    return (
      <div>
        <Title/>
        <HeaderPanel/>
        <TodoPanel/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);