import React from "react"

class TodoItem extends React.Component {

    render() {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.onChange(this.props.item.id)}
                />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}

/* function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
} */

export default TodoItem