import SubCategoryTemplate from "./SubCategoryTemplate";
import React, { Component } from 'react';
import Meals from "../../json/Meals.json"
// import Meals from "../../json/ApiMeals"
import { v4 as uuidv4 } from 'uuid';


class SubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subData: [],
        }
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.name}`)
            .then(response => response.json())
            .then(json => this.setState({ subData: json.meals }))
    }

    render() {
        console.log({ Meals })
        return (
            <section className="SubCategory">
                <h1>Try one of these!</h1>
                <article className="SubCategoryGridContainer">
                    {this.state.subData.map(e => <SubCategoryTemplate
                        name={e.strMeal.slice(0, 37)}
                        picture={e.strMealThumb}
                        key={uuidv4()}
                        id={e.idMeal}
                    />)}
                </article>
            </section>);
    }
}

export default SubCategory;