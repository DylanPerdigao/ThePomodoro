import './Publish.css';
import '../../styles/Sign.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div id="sign">
            <div id="inner">
                <h1>Publicar Receita</h1>

                <label>Nome</label>
                <input type="text" placeholder="nome"></input>

                <label>Descrição</label>
                <input type="text" placeholder="descrição"></input>

                <label>Ingredientes</label>
                <div id="ingredients">
                    <input type="text" placeholder="nome"></input>
                    <input type="text" placeholder="quantidade"></input>
                    <input type="text" placeholder="unidade"></input>
                </div>

                <label>Preparação</label>
                <textarea id="preparation" placeholder="preparação"></textarea>

                <div class="horizontal">
                    <button>Publicar</button>
                    <button onclick="window.location.href='/'">Voltar</button>
                </div>
            </div>
        </div>
    );
};