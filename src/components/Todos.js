import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import { 
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo,
 } from '../actions/todos';

class Todos extends Component {
    addItem = (e) => {
        if (!this.input.value.length) return false;
        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''
        ));
    }

    toggleItem = (id) => {
        this.props.dispatch(handleToggleTodo(id));
    }

    removeItem = (todo) => {
        this.props.dispatch(handleRemoveTodo(todo));
    }

    render() { 
        const {todos} = this.props;
        return (
            <div>
                <h1>Todo List</h1>
                <input 
                    type='text' 
                    placeholder='Add todo' 
                    ref={(input) => this.input = input} />
                <button onClick={this.addItem}>Add</button>
                <List 
                    items={todos} 
                    toggle={this.toggleItem}
                    remove={this.removeItem}
                />
            </div>
        );
    }
}

export default connect((store) => ({
    todos: store.todos,
}))(Todos);
