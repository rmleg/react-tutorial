import React from "react"
import TodoItem from "./TodoItem"
export default App

function App() {
    const myClassName = 'my-form';

    return (
        <form className={myClassName}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </form>
    )
}