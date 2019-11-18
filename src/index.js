import React from "react"
import ReactDOM from "react-dom"

function MyInfo () {
    return (
        <div class="hello">
            <h1>Rachel Leggett</h1>
            <p>Rachel is a web developer, 
                a published knitwear designer, and a pole dancer living in Ann Arbor, MI.</p>
            <ul>
                <li>Italy</li>
                <li>UK</li>
                <li>Australia</li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <MyInfo />,
    document.querySelector("#root")
);