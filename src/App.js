import React from "react"
export default App

function App() {
    return (
        <form>
            <p><input type="checkbox" id="todo-1" name="todo-1" />
            <label for="todo-1"><span>Thing 1</span></label></p>
            <p><input type="checkbox" id="todo-2" name="todo-2" />
            <label for="todo-2"><span>Thing 2</span></label></p>
            <p><input type="checkbox" id="todo-3" name="todo-3" />
            <label for="todo-3"><span>Thing 3</span></label></p>
        </form>
    )
}