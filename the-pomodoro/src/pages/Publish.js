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
                <div class="honrizontal">
                    <input type="text" placeholder="nome"></input>
                    <input type="text" placeholder="quantidade"></input>
                    <input type="text" placeholder="unidade"></input>
                </div>

                <label>Preparação</label>
                <input type="textarea" placeholder="preparação"></input>

                <div class="horizontal">
                    <input type="submit" value="Publicar"></input>
                    <input type="submit" value="Voltar"></input>
                </div>
            </div>
        </div>
    );
};