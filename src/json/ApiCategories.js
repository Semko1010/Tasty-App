// import { Component } from 'react';
// let categories = []
// let catsArray = []
// class ApiCategories extends Component {
//     state = {
//         categoriesFetch: []
//     }
//     componentDidMount() {
//         fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//             .then(response => response.json())
//             .then(json => this.setState({ categoriesFetch: json.categories.map(i => i.strCategory) }))
//     }
//     componentDidUpdate() {
//         categories = this.state.categoriesFetch
//     }
//     render() {
//         return <div>
//         </div>;
//     }
// }

// export { categories };
// export default ApiCategories;