import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        /*this.setState({
            count: this.state.count + 1
        })*/
        this.setState(
            prevState => {
                return {count: prevState.count + 1}
            }
        );
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

/*class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}*/

export default App