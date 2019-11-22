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
import Button from "./Button"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return (
                {
                    isLoggedIn: !prevState.isLoggedIn
                }
            );
        });
    }

    render() {
        return (
            <div>
                <h2>You are {this.state.isLoggedIn ? 'logged in' : 'logged out'}.</h2>
                <Button onClick={this.handleClick} text={this.state.isLoggedIn ? "Log Out" : "Log In"} />
            </div>
        )
    }
}

export default App



/* import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData,
            isLoading: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    //After App mounts, run this function after 1.5 seconds
    //when state changes, component rerenders with updated state
    //result: 'loading...' for 1.5 seconds, then todos show up
    componentDidMount() {
        setTimeout(() => {
            this.setState( {
                isLoading: false
            })
        }, 1500)
    }

    handleChange(id) {
        this.setState(prevState => {
            const newState = prevState.todos.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            });
            return {
                todos: newState
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem 
            onChange={this.handleChange} 
            key={item.id} 
            item={item} />)
        return (
            <div className="todo-list">
                {this.state.isLoading ? <p>Loading...</p> : todoItems}
            </div>
        );
    }
}

export default App */