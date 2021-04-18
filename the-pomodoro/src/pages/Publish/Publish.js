import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Sign.css';
import './Publish.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const IngredientState = {
        "name": undefined,
        "quantity": undefined,
    };
    const ingredients = [];

    const recipe = {
        "name": undefined,
        "image": "",
        "description": undefined,
        "preparation": undefined,
        "ingredients": ingredients
    };

    function resetInputs(){
        IngredientState.name = undefined;
        IngredientState.quantity = undefined;
        IngredientState.unit = undefined;
        document.getElementById("ingredientName").value="";
        document.getElementById("ingredientQuantity").value="";
        document.getElementById("ingredientUnit").value="";
    }

    function addIngredient(e){
        e.preventDefault();
        document.getElementById("ingredientName").style.background="white";
        document.getElementById("ingredientQuantity").style.background="white";
        document.getElementById("ingredientUnit").style.background="white";
        var validInputs=3;
        if(!IngredientState.name || !Number.isNaN(parseFloat(IngredientState.name))){
            document.getElementById("ingredientName").style.background="pink";
            validInputs--;
        }
        if(!IngredientState.quantity || Number.isNaN(parseFloat(IngredientState.quantity))){
            document.getElementById("ingredientQuantity").style.background="pink";
            validInputs--;
        }
        if (!IngredientState.unit || !Number.isNaN(parseFloat(IngredientState.unit))){
            document.getElementById("ingredientUnit").style.background="pink";
            validInputs--;
        }
        if(validInputs===3){
            ingredients.push({
                "name": IngredientState.name,
                "quantity": parseFloat(IngredientState.quantity.replace(',','.'))+IngredientState.unit,
            });
            resetInputs();
            ReactDOM.render(<Ingredients />, document.getElementById('ingredientsList'));
        }
    }

    function removeIngredient(e){
        e.preventDefault();
        ingredients.splice(e.target.id.split("#")[1],1);
        ReactDOM.render(<Ingredients />, document.getElementById('ingredientsList'));
    }

    function publish(e){
        var myHeaders = new Headers();
        myHeaders.append("x-acess-token", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(recipe);
        console.log(raw);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://thepomodoro.herokuapp.com/recipe", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.message==="sucess"){
                window.location.href='/';
            }else{
                alert("Preencha todos os campos corretamente")
            }}
        )
        .catch(error => alert(error.message));
        }

    function setRecipeName(e){recipe.name= e.target.value}
    function setRecipeDescription(e){recipe.description= e.target.value}
    function setRecipePreparation(e){recipe.preparation= e.target.value}
    function setIngredientName(e){IngredientState.name = e.target.value}
    function setIngredientQuantity(e){IngredientState.quantity = e.target.value}
    function setIngredientUnit(e){IngredientState.unit = e.target.value}

    const Ingredients = (props) => {
        return (
            <div id="ingredientsList">
            <ul>
                {ingredients.map( (ing,index) => (
                    <li key={index} id="ingredientListItem">
                        <label id="ingredientItem">{ing.quantity}{ing.unit} {ing.name}</label>
                        <button id={"removeIngredient#"+index} className="removeIngredient" onClick={removeIngredient}>X</button>
                    </li>
                ))}
            </ul>
            </div>

        )
    }

    return (
        <div id="sign">
            <div id="inner">
                <h1>Publicar Receita</h1>

                <label>Nome</label>
                <input type="text" placeholder="nome" value={recipe.name} onChange={setRecipeName}/>

                <label>Descrição</label>
                <input type="text" placeholder="descrição" value={recipe.description} onChange={setRecipeDescription}/>

                <label>Ingredientes</label>
                <div id="ingredients">
                    <input id="ingredientName" type="text" placeholder="nome" value={IngredientState.name} onChange={setIngredientName}/>
                    <input id="ingredientQuantity" type="text" placeholder="quantidade" value={IngredientState.quantity} onChange={setIngredientQuantity}/>
                    <input id="ingredientUnit" type="text" placeholder="unidade" value={IngredientState.quantity} onChange={setIngredientUnit}/>
                </div>
                <button onClick={addIngredient}>Adicionar</button>
                <Ingredients />

                <label>Preparação</label>
                <textarea id="preparation" placeholder="preparação" value={recipe.preparation} onChange={setRecipePreparation}/>

                <div className="horizontal">
                    <button onClick={publish}>Publicar</button>
                    <button onClick={()=>(window.location.href='/')}>Voltar</button>
                </div>
            </div>
        </div>
    );
};