import React, { Component } from 'react';
import navLogo from "../../img/nav.png"
import { Link } from "react-router-dom"
let tempArray = []
let field = ''
class Header extends Component {
    state = {

    }
    componentDidUpdate() {
        field = this.state.inpValue
    }
    render() {
        // by pressing Enter on input it triggers click on button
        let keyDown = (e) => {
            let searchButton = document.getElementById('searchButton')
            if (e.key === 'Enter') {
                searchButton.click();
            }
        }

        return (
            <section className="Header">
                <Link to="/"><img src={navLogo} alt="navLogo" /></Link>
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <input onChange={event => { this.setState({ inpValue: event.target.value }) }} onKeyDown={keyDown} id="field" type="text" placeholder="Type something to search" />
                <Link to={`/search/${this.state.inpValue}`} ><button id='searchButton' >Search</button></Link>
            </section>
        );
    }
}

export { field, tempArray };
export default Header;