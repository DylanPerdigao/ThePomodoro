import { encode } from 'base-64';
import { useState, useEffect } from 'react';
import Post from '../../components/Post'
import './Home.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [state, setState] = useState ({
        search: null,
        loading: true,
        error: false,
        RecipesComponents: null
    });
    function setSearch(e){state.search = e.target.value}

    function search(e){
      if(e.keyCode === 13){
        let a = ""; 
        a = document.getElementById("mySearch").value;

        state.search=document.getElementById("mySearch").value;
        let list = a.split(',').map(ing =>(ing.trim()));
        //console.log(list)

        fetch('https://thepomodoro.herokuapp.com/search_by_ingredients', {
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify({"ingredients": list}),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(resp => {
            console.log(resp);
            
            const recipes = resp["recipes"];

            // eslint-disable-next-line react-hooks/exhaustive-deps
            let popularRecipesComponents = recipes.map( p => (
                <Post 
                    id={p.id}
                    name={p.name}
                    description={p.description}
                    image={p.image}
                    rating= {p.rating}

                    author={p.author}

                    onClick = { () => {window.location.href=`/recipe/${p.id}`;}}
                />
            ));
            
            setState({
                loading: false,
                error: false,
                name: resp.name,
                RecipesComponents: popularRecipesComponents
            })

        })
        .catch(error => {
            console.log(error);
            setState({
                loading: false,
                error: true,
                name: ""
            })
        });


        console.log(state.search);
      }
    }

    useEffect(() => {
        if (state.loading === true && state.error === false) {
        
            //fetch('http://127.0.0.1:5000/user', {     //local ?username=...&ini=...&fim=...
            fetch(`https://thepomodoro.herokuapp.com/main_screen?username=${""}&ini=0&fim=10`, {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response => response.json())
            .then(resp => {
                console.log(resp);
                
                const recipes = resp["recipes"];

                // eslint-disable-next-line react-hooks/exhaustive-deps
                let popularRecipesComponents = recipes.map( p => (
                    <Post 
                        id={p.id}
                        name={p.name}
                        description={p.description}
                        image={p.image}
                        rating= {p.rating}

                        author={p.author}

                        onClick = { () => {window.location.href=`/recipe/${p.id}`;}}
                    />
                ));
                
                setState({
                    loading: false,
                    error: false,
                    name: resp.name,
                    RecipesComponents: popularRecipesComponents
                })

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
        <div id="home">
        <div id="searchBar">
            <label>Procurar receita por ingredientes</label>
            <input id="mySearch" type="text" placeholder="ing1, ing2, ..." value={state.search} onClick={setSearch} onKeyUp={search}></input>
        </div>
        <div id="feed">
            {state.search === true ? (<label>Receitas Encontradas</label>) : (<label>Receitas Populares</label>)}
            {state.loading ? (<p>loading...</p>
            ) : state.error ? (<h1>AN ERROR HAS OCURRED!</h1>
            ) : (
                <div className="Recipes">
                    {state.RecipesComponents}
                </div>
            )}
        </div>
        </div>
    );
};