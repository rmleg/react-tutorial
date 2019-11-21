/**
 * Challenge: Get rid of our warning about not having an onChange on our input. 
 * For now, the function that runs onChange can simply console.log something.
 */

import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input onChange={() => console.log('changed')} type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem