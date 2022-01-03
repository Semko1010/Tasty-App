import Random from "../Category/Random"
import DetailTemplate from "./DetailTemplate"
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
let strIngredient = [];
let strMeasure = [];
let strDesc = [];

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subData: [],
            test: []

        }
    }
    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.id}`)
            .then(response => response.json())
            .then(json => this.setState({ subData: json.meals }))
    }
    fetchIngredients2 = () => {
        this.state.subData.forEach(e => {
            let text = this.state.subData[0].strInstructions
            strDesc = text.split('.')
            strDesc = strDesc.map(i => i + '.')
            strDesc.pop()
            console.log(strDesc)
        });
        this.state.subData.forEach(e => {
            strIngredient = []
            for (let i = 0; i < 20; i++) {
                let n = `strIngredient${i}`
                let ne = `e.${n}`
                let a = eval(ne);
                if (a) {
                    strIngredient.push(eval(ne))
                }
            }
        });
        this.state.subData.forEach(e => {
            strMeasure = []
            for (let i = 0; i < 20; i++) {
                let n = `strMeasure${i}`
                let ne = `e.${n}`
                let a = eval(ne);
                if (a) {
                    strMeasure.push(a)
                }
            }
        });


    }
    render() {
        this.fetchIngredients2()
        return (
            <div>
                {this.state.subData.map(i => <DetailTemplate
                    key={uuidv4()}
                    name={i.strMeal}
                    picture={i.strMealThumb}
                    instructions={i.strInstructions}
                    youtube={i.strYoutube}
                />)}

            </div>
        )
    }
}

export { strIngredient, strMeasure, strDesc };
export default Detail;
