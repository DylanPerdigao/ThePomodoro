// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div id="publish">
            <form>
                <h1>Publicar Receita</h1>

                <h2>Nome</h2>
                <input type="text" placeholder="nome"></input>

                <h2>Descrição</h2>
                <input type="text" placeholder="descrição"></input>

                <h2>Ingredientes</h2>
                <input type="text" placeholder="nome"></input>
                <input type="text" placeholder="quantidade"></input>
                <input type="text" placeholder="unidade"></input>

                <h2>Preparação</h2>
                <input type="textarea" placeholder="preparação"></input>

                <div class="publishButtons">
                    <input type="submit" value="Publicar"></input>
                    <input type="submit" value="Voltar"></input>
                </div>
            </form>
        </div>
    );
};