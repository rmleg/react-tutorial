import React from "react"
import Joke from "./Joke"
export default App

function App() {
    return (
        <div>
            <Joke 
                question="why did the chicken cross the road?"
                answer="to get to the other side"
            />
            <Joke answer="That's what she said!" />
        </div>
    )
}