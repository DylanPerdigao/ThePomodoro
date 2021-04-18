import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Sign.css';
import './Publish.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const state = {
        "name": undefined,
        "quantity": undefined,
        "unit": undefined
    };
    const ingredients = [{
        "name": "name",
        "quantity": 10,
        "unit": "dl"
    }];

    function setName(e){state.name = e.target.value}
    function setQuantity(e){state.quantity = e.target.value}
    function setUnit(e){state.unit = e.target.value}

    function resetInputs(){
        state.name = undefined;
        state.quantity = undefined;
        state.unit = undefined;
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
        if(!state.name || !Number.isNaN(parseFloat(state.name))){
            document.getElementById("ingredientName").style.background="pink";
            validInputs--;
        }
        if(!state.quantity || Number.isNaN(parseFloat(state.quantity))){
            document.getElementById("ingredientQuantity").style.background="pink";
            validInputs--;
        }
        if (!state.unit || !Number.isNaN(parseFloat(state.unit))){
            document.getElementById("ingredientUnit").style.background="pink";
            validInputs--;
        }
        if(validInputs==3){
            ingredients.push({
                "name": state.name,
                "quantity": parseFloat(state.quantity.replace(',','.')),
                "unit": state.unit
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
                <input type="text" placeholder="nome"/>

                <label>Descrição</label>
                <input type="text" placeholder="descrição"/>

                <label>Ingredientes</label>
                <div id="ingredients">
                    <input id="ingredientName" type="text" placeholder="nome" value={state.name} onChange={setName}/>
                    <input id="ingredientQuantity" type="text" placeholder="quantidade" value={state.quantity} onChange={setQuantity}/>
                    <input id="ingredientUnit" type="text" placeholder="unidade" value={state.quantity} onChange={setUnit}/>
                </div>
                <button onClick={addIngredient}>Adicionar</button>
                <Ingredients />

                <label>Preparação</label>
                <textarea id="preparation" placeholder="preparação"/>

                <div className="horizontal">
                    <button>Publicar</button>
                    <button onClick={()=>(window.location.href='/')}>Voltar</button>
                </div>
            </div>
        </div>
    );
};