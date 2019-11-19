import React from "react"

export default Product

/*      id: "1",
        name: "Pencil",
        price: 1,
        description:
*/

function Product(props) {
    return (
        <div className="product">
            <h2>{props.name} | ${props.price}</h2>
            <p>{props.description}</p>
        </div>
    )
}