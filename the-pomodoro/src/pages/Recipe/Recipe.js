import { useParams } from "react-router-dom";
import './Recipe.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let { id } = useParams();
    console.log(id);

    //TODO: request à recipe com id

    const res = {
        "ingredients": [
            {
                "ingredient_id": 2,
                "name": "fiambre",
                "quantity": "1 fatia"
            },
            {
                "ingredient_id": 3,
                "name": "pão de forma",
                "quantity": "2 fatias"
            }
        ],
        "recipe": {
            "author": "teste testinho",
            "description": "duas fatias de pão de forma com uma fina e requintada fatia de fiambre no meio",
            "id": 8,
            "image": "",
            "name": "Pão com fiambre",
            "person_id": 1,
            "post_date": "04/17/2021, 04:22:21",
            "preparation": "1. Coloque a fatia de fiambre dentro do pão\n2. Aqueca no microondas\n3. Bom apetite",
            "rates": 0,
            "rating": 0.0
        }
    };


    return (
        <div id="recipe">
            <h1>{res.recipe.name}</h1>
            <h3>By {res.recipe.author}</h3>
            <div id="recipeBox">
                <div id="group">
                    <div>
                        <h2>Description</h2>
                        <p>{res.recipe.description}</p>
                    </div>
                    <img src={res.recipe.image} alt = "recipe"/>
                </div>
                <h2>Ingredients</h2>
                <ul>
                    {res.ingredients.map( ing => (
                            <li>
                                {`${ing.quantity} of ${ing.name}`}
                            </li>
                        ))}
                </ul>
                <h2>Preparation</h2>
                <p>{res.recipe.preparation}</p>
            </div>
        </div>
    );
};