import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: 'male',
            location: '',
            dietaryRestrictions: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if(e.target.type === 'checkbox' && e.target.name === 'dietaryRestrictions') {
            console.log(e.target.name)
            if(e.target.checked) {
                this.setState(prevState =>(
                    {
                        [e.target.name]: prevState.dietaryRestrictions.push(e.target.id)
                    }
                ))
            }
            else {
                this.setState(prevState =>(
                    {
                        [e.target.name]: prevState.dietaryRestrictions.pop(e.target.id)
                    }
                ))
            }
            this.setState(
                {
                    [e.target.name]: e.target.checked
                }
            )
        }
        else {
            this.setState(
                {
                    [e.target.name]: e.target.value
                }
            )
        }
    }
    
    render() {
        return (
            <main>
                <form>
                    <input onChange={this.handleChange} value={this.state.firstName} name="firstName" placeholder="First Name" /><br />
                    <input onChange={this.handleChange} value={this.state.lastName} name="lastName" placeholder="Last Name" /><br />
                    <input onChange={this.handleChange} value={this.state.age} name="age" placeholder="Age" /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <input onChange={this.handleChange} type="radio" name="gender" value="male" checked={this.state.gender === 'male'} /><label htmlFor="gender">Male</label><br />
                    <input onChange={this.handleChange} type="radio" name="gender" value="female" checked={this.state.gender === 'female'} /><label htmlFor="gender">Female</label>
                    <br />
                    
                    {/* Create select box for location here */}
                    <select onChange={this.handleChange} value={this.state.location} name="location">
                        <option>Detroit</option>
                        <option>Atlanta</option>
                        <option>Los Angeles</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <input onChange={this.handleChange} type="checkbox" name="dietaryRestrictions" id="nut free" checked={this.state.nutFree} />
                    <label htmlFor="nut-free">Nut Free</label><br />
                    <input onChange={this.handleChange} type="checkbox" name="dietaryRestrictions" id="kosher" checked={this.state.kosher} />
                    <label htmlFor="kosher">Kosher</label><br />
                    <input onChange={this.handleChange} type="checkbox" name="dietaryRestrictions" id="halal" checked={this.state.halal} />
                    <label htmlFor="halal">Halal</label><br />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: <br />
                    {/* Dietary restrictions here, comma separated */}
                    {this.state.dietaryRestrictions}
                </p>
            </main>
        )
    }
}

export default App
