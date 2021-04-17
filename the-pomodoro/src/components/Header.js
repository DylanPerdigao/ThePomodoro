
import logo from '../images/logo192.png';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (

        <div id="header">
            <nav>
                <a href = "/">
                    <h2>The</h2>
                    <div>
                        <h1>Pom</h1> <img id = "logo" src={logo} alt="logo"/> <h1>doro</h1>
                    </div>
                </a>
                <input type="text" placeholder="Pesquisar receita, ingrediente"></input>
                <div>
                    <a href = "/profile">Perfil</a>
                    <a href = "/publish">Publicar</a>
                </div>
                
            </nav>
        </div>
    );
};