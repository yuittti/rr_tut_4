import React, { Component } from 'react';
import Todos from './Todos';
import Goals from './Goals';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());  
  }

  render() {
    const {loading} = this.props;

    if (loading) return <h3>Loading...</h3>

    return (
      <div>
        <Todos />
        <Goals />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);
