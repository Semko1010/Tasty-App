import { Link } from "react-router-dom"

const SubCategoryTemplate = (props) => {
    return (
        <article className="SubCategoryItem">
            <Link className="link" to={`/details/${props.id}`}>
                <p className="SubCatName">{props.name}</p>
                <img src={props.picture} alt={props.name} />
            </Link>
        </article>
    );
}

export default SubCategoryTemplate;