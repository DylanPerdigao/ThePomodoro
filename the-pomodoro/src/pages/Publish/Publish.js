import React from 'react';
import ReactDOM from 'react-dom';
import './Publish.css';
import '../../styles/Sign.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const state = {
        "name": null,
        "quantity": null,
        "unit": null
    };
    const ingredients = [{
        "name": "name",
        "quantity": 10,
        "unit": "dl"
    }];

    function setName(e){state.name = e.target.value}
    function setQuantity(e){state.quantity = e.target.value}
    function setUnit(e){state.unit = e.target.value}

    function addIngredient(e){
        e.preventDefault();
        ingredients.push({
            "name": state.name,
            "quantity": state.quantity,
            "unit": state.unit
        });
        document.getElementById("ingredientName").value="";
        document.getElementById("ingredientQuantity").value="";
        document.getElementById("ingredientUnit").value="";
        ReactDOM.render(<Ingredients />, document.getElementById('ingredientsList'));
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
                    <li>
                        {ing.quantity}{ing.unit} {ing.name}
                        <button id={"removeIngredient#"+index} className="removeIngredient" onClick={removeIngredient}>Remover</button>
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
                    <button onClick="window.location.href='/'">Voltar</button>
                </div>
            </div>
        </div>
    );
};