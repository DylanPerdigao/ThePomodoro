import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Recipe.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [state, setState] = useState ({
        loading: true,
        error: false,
        found: false,
        name: "",
        author: "",
        description: "",
        image: "",
        ingredients: null,
        preparation: "",
    });

    let { id } = useParams();

    useEffect(() => {
        if (state.loading === true && state.error === false) {
        
            fetch(`https://thepomodoro.herokuapp.com/recipe?id=${id}`, {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response => response.json())
            .then(resp => {

                console.log(resp);

                if (resp === false){
                    
                    setState({
                        loading: false,
                        error: false,
                        found: false
                    })
                }
                else{
                    setState({
                        loading: false,
                        error: false,
                        found: true,
                        name: resp.recipe.name,
                        author: resp.recipe.author,
                        description: resp.recipe.description,
                        image: resp.recipe.image,
                        ingredients: resp.ingredients,
                        preparation: resp.recipe.preparation,
                    })
                }

            })
            .catch(error => {
                console.log(error);
                setState({
                    loading: false,
                    error: true,
                })
            });
        }
    })


    return (
        <div id="recipe">{state.loading ? (<p>loading...</p>
            ) : state.error ? (<h1>AN ERROR HAS OCURRED!</h1>
            ) : state.found === false ? (<h1>404 - Recipe not Found</h1>
            ) : (
                <>
                    <h1>{state.name}</h1>
                    <h3>By {state.author}</h3>
                    <div id="recipeBox">
                        <div id="group">
                            <div>
                                <h2>Description</h2>
                                <p>{state.description}</p>
                            </div>
                            <img src={state.image} alt = "recipe"/>
                        </div>
                        <h2>Ingredients</h2>
                        <ul>
                            {state.ingredients.map( ing => (
                                <li key = {ing.id}>
                                    {`${ing.quantity} of ${ing.name}`}
                                </li>
                            ))}
                        </ul>
                        <h2>Preparation</h2>
                        <p>{state.preparation}</p>
                    </div>
                </>
            )}
        </div>
    );
};