import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import { handleRemoveGoal , handleAddGoal } from '../actions/goals';

class Goals extends Component {
    addItem = (e) => {
        if (!this.input.value.length) return false;
        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = ''
        ));
    }

    removeItem = (item) => {
        this.props.dispatch(handleRemoveGoal(item));
    }

    render() { 
        const {goals} = this.props;
        return (
            <div>
                <h1>Goals List</h1>
                <input 
                    type="text" 
                    placeholder='Add Goal' 
                    ref={(input) => this.input = input} />
                <button onClick={this.addItem}>Add</button>
                <List 
                    items={goals}
                    remove={this.removeItem}
                />
            </div>
        );
    }
}

export default connect((store) => ({
    goals: store.goals,
}))(Goals);