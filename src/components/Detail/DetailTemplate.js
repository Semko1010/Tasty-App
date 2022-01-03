import { strIngredient } from "./Detail";
import { strMeasure } from "./Detail";
import { strDesc } from "./Detail";


const DetailTemplate = ({ youtube, name, picture }) => {

    return (

        < section className="DetailItem" >
            <img src={picture} alt={name} />
            <div className="DetailNameIng">
                <h2>Ingredients</h2>
            </div>
            <section className="DetailFlex">
                <article className="DetailLeft">
                    <h2>{name}</h2>
                    <ul>
                        {strDesc.map(e =>

                            <li>{e}</li>

                        )}
                    </ul>
                </article>
                <article className="DetailRight">
                    <ul className="Measure">
                        <div className="strMeasure">
                            {strMeasure.map(e =>
                                <p>{e}</p>

                            )}
                        </div>
                    </ul>
                    <ul className="Ingredients">

                        <div className="strIngredient">
                            {strIngredient.map(e =>
                                <li>{e}</li>

                            )}
                        </div>
                    </ul>

                </article>
            </section>
            <button className="button"><a href={youtube}>Watch on YouTube</a></button>
        </section >
    );
}

export default DetailTemplate;