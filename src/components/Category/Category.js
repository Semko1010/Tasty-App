import CategoryTemplate from "./CategoryTemplate"
import React from 'react';
import { Link } from "react-router-dom"
import Meals from '../../json/Meals.json'
// import { Meals } from "../../json/ApiMeals";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArr: [],
            val: "",
        }
    }


    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(json => this.setState({ myArr: json.categories }, () => {
                console.log(this.state.myArr)
            }))
    }
    render() {
        let generateNum = (Math.floor(Math.random() * Meals.meals.length))
        let random = Meals.meals[generateNum].idMeal
        return (
            <section className="Category">
                <h1>Or go through our categories</h1>
                <article className="CategoryGridContainer">
                    {this.state.myArr.map(item => <CategoryTemplate
                        id={item.idCategory}
                        key={item.idCategory}
                        name={item.strCategory}
                        picture={item.strCategoryThumb}
                    />)}
                    <section className="CategoryItem RandomBox">
                        <Link className="link" to={`/details/${random}`}>Random</Link>
                    </section>
                </article>
            </section>
        )
    }
}

export default Category;