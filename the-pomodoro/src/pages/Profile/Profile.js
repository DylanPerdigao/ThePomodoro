import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Post from '../../components/Post'

import './Profile.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [state, setState] = useState ({
        loading: true,
        error: false,
        found: false,
        name: "",
        myRecipesComponents: null
    });


    let { username } = useParams();

    useEffect(() => {
        if (state.loading === true && state.error === false) {
        
            //fetch('http://127.0.0.1:5000/user', {     //local ?username=...&ini=...&fim=...
            fetch(`https://thepomodoro.herokuapp.com/user?username=${username}&ini=0&fim=7`, {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response => response.json())
            .then(resp => {
                console.log(resp);
                
                if (resp.message){
                    setState({
                        loading: false,
                        error: false,
                        found: false
                    })
                }
                else{

                    const myRecipes = resp["recipes"];

                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    let myRecipesComponents = myRecipes.map( p => (
                        <Post 
                            id={p.id}
                            name={p.name}
                            description={p.description}
                            image={p.image}
                            rating= {p.rating}

                            author={resp.name}

                            onClick = { () => {window.location.href=`/recipe/${p.id}`;}}
                        />
                    ));
                    
                    setState({
                        loading: false,
                        error: false,
                        found: true,
                        name: resp.name,
                        myRecipesComponents: myRecipesComponents
                    })
                }
            })
            .catch(error => {
                console.log(error);
                setState({
                    loading: false,
                    error: true,
                    name: ""
                })
            });
        }
    });
    

    return (
        <div id="profile">
            {state.loading ? (<p>loading...</p>
            ) : state.error ? (<h1>AN ERROR HAS OCURRED!</h1>
            ) : state.found === false ? (<h1>404 - User not Found</h1>
            ) : (
                <div id="inner">
                    <h1>{state.name}</h1>

                    <button>Follow</button>
                    <button>Unfollow</button>
                    

                    <h2>Minhas Receitas</h2>
                    <div className="myRecipes">
                        {state.myRecipesComponents}
                    </div>
                    
                    {/*
                    <h2>Minhas Receitas</h2>
                    <div className="favRecipes">
                        <Post />
                    </div>
                    */}
                </div>
            )}
        </div>
    );

};