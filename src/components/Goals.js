import React, { Component } from 'react';
import List from './List';

class Goals extends Component {
    state = {
        goals: [
            {
                name: 'Goal1',
                id: 0,
            },
            {
                name: 'Goal2',
                id: 1
            }
        ]
    };

    render() { 
        return (
            <div>
                <h1>Goals List</h1>
                <input 
                    type="text" 
                    placeholder='Add Goal' 
                    ref={(input) => this.input = input} />
                <button>Add</button>
                <List 
                    items={this.state.goals}
                />
            </div>
        );
    }
}
 
export default Goals;