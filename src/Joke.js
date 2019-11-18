import React from "react"
export default Joke

function Joke(props) {
    if(!props.question) {
        console.log(props.answer);
    }
    return (
        <div className="joke">
            <p className="question">{props.question}</p>
            <p className="answer">{props.answer}</p>
        </div>
    )
}