import { Link } from "react-router-dom"

const CategoryTemplate = (props) => {
    return (
        <article className="CategoryItem">
            <Link className="link" to={`/category/${props.name}`}>
                <p>{props.name}</p>
                <img src={props.picture} alt={props.name} />
            </Link>
        </article>
    );
}

export default CategoryTemplate;