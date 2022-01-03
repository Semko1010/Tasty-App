import React from 'react';
import { strIngredient } from "../Detail/Detail";
import { strMeasure } from "../Detail/Detail";
import { strDesc } from "../Detail/Detail";




class Random extends React.Component {
    state = {
        myArr: []
    }

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(json => this.setState({ myArr: json.meals[0] }, () => {

            }))
    }




    render() {

        let data = this.state.myArr


        return (
            <section className="DetailItem">
                <img src={data.strMealThumb} alt={data.strMeal} />
                <section className="DetailFlex">
                    <article className="DetailLeft">
                        <h2>{data.strMeal}</h2>
                        <ul>
                            {strDesc.map(e =>
                                <li>{e}</li>
                            )}
                        </ul>
                    </article>
                    <article className="DetailRight">
                        <h2>Ingredients</h2>
                        <ul className="Ingredients">

                            <ul className="ing">
                                {strIngredient.map(e =>
                                    <li>{e}</li>
                                )}
                            </ul>
                            <ul className="meas">
                                {strMeasure.map(e =>
                                    <li>{e}</li>
                                )}
                            </ul>


                            {/* <div>
                                <span>{data.strMeasure1}</span>
                                <span>{data.strIngredient1}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure2}</span>
                                <span>{data.strIngredient2}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure3}</span>
                                <span>{data.strIngredient3}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure4}</span>
                                <span>{data.strIngredient4}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure5}</span>
                                <span>{data.strIngredient5}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure6}</span>
                                <span>{data.strIngredient6}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure7}</span>
                                <span>{data.strIngredient7}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure8}</span>
                                <span>{data.strIngredient8}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure9}</span>
                                <span>{data.strIngredient9}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure10}</span>
                                <span>{data.strIngredient10}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure11}</span>
                                <span>{data.strIngredient11}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure12}</span>
                                <span>{data.strIngredient12}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure13}</span>
                                <span>{data.strIngredient13}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure14}</span>
                                <span>{data.strIngredient14}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure15}</span>
                                <span>{data.strIngredient15}</span>
                            </div> */}
                        </ul>
                        <button className="button"><a href={data.strYoutube}>Watch on YouTube</a></button>
                    </article>
                </section>
            </section >
        )
    }
}

export default Random;