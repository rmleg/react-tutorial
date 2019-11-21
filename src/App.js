/* *
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out
 *  method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens,
 *  it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            console.log(prevState);
            return(
                prevState.todos.map(item => {
                    item.id === id ? item.completed = !item.completed : item.completed = item.completed
                })
            )
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem 
            onChange={(e) => this.handleChange(item.id, e)} 
            key={item.id} 
            item={item} />)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        );
    }
}

export default App