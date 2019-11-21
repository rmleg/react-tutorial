/*
In the previous iteration of this todo list app, 
we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, 
which will only happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a 
stateful class component and load the imported `todosData` into state.
*/

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: todosData.map(item => <TodoItem key={item.id} item={item}/>)
        }
    }
    
    render() {
        return (
            <div className="todo-list">
                {this.state.todoItems}
            </div>
        )
    }
}

/*function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}*/

export default App