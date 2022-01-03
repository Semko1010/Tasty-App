// import { Component } from 'react';
// import { categories } from './ApiCategories'
// let Meals = { "meals": [] }
// class ApiMeals extends Component {
//     state = {
//         mealsFetch: []
//     }
//     componentDidMount() {
//         for (let i of categories) {

//             fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${i}`)
//                 .then(response => response.json())
//                 .then(json => Meals.meals.push(json.meals))
//         }
//     }
//     componentDidUpdate() {
//         this.setState({ mealsFetch: Meals.meals })
//         console.log(this.state.mealsFetch)
//     }
//     render() {
//         setTimeout(() => {
//             console.log(Meals)
//         }, 1000);
//         return <div>
//         </div>;
//     }
// }

// export { Meals };
// export default ApiMeals;