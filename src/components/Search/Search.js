import Meals from "../../json/Meals.json"
// import Meals from '../../json/ApiMeals'
import { v4 as uuidv4 } from 'uuid';
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
import { useParams } from 'react-router-dom';

var searchedData = []
// generates a new array, using input value
function generateData(searchWord, array) {
    searchedData = []
    for (let i = 0; i < array.length; i++) {
        if ((array[i].strMeal.toLowerCase()).includes(searchWord.toLowerCase())) {
            searchedData.push(array[i]);
        }
    }
}

const Search = () => {
    // use params brings the last element of address bar in browser 
    let { query } = useParams()

    generateData(query, Meals.meals)
    return (<div className="Search">
        {searchedData.map(i => <SubCategoryTemplate
            key={uuidv4()}
            id={i.idMeal}
            name={i.strMeal}
            picture={i.strMealThumb}
        />)}
    </div>);
}

export default Search;
