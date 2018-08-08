import React, { Component } from 'react';
import List from './List';

class Todos extends Component {
    state = { 
        todos: [
            {
                name: 'Learn React',
                id: 0,
                completed: false
            },
            {
                name: 'Learn Redux',
                id: 1,
                completed: false
            }
        ]
    };

    render() { 
        return (
            <div>
                <h1>Todo List</h1>
                <input 
                    type='text' 
                    placeholder='Add todo' 
                    ref={(input) => this.input = input} />
                <button>Add</button>
                <List 
                    items={this.state.todos} 
                />
            </div>
        );
    }
}
 
export default Todos;