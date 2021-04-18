import '../styles/Sign.css';
let base64 = require('base-64');

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const state = {
        name: undefined,
        email: undefined,
        username: undefined,
        password: undefined,
        passwordConfirmation: undefined,
        bio: "<not defined>",
    }

    function signup(e){
        e.preventDefault();
        document.getElementById("name").style.background="white";
        document.getElementById("email").style.background="white";
        document.getElementById("username").style.background="white";
        document.getElementById("password").style.background="white";
        document.getElementById("passwordConfirmation").style.background="white";
        var validInputs=5;
        if (!state.name){
            document.getElementById("name").style.background="pink";
            validInputs--;
        }
        if (!state.email){
            document.getElementById("email").style.background="pink";
            validInputs--;
        }
        if (!state.username){
            document.getElementById("username").style.background="pink";
            validInputs--;
        }
        if(!state.password){
            document.getElementById("password").style.background="pink";
            validInputs--;
        }
        if(!state.passwordConfirmation || state.password!=state.passwordConfirmation){
            document.getElementById("passwordConfirmation").style.background="pink";
            validInputs--;
        }
        if(validInputs===5){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            delete state.passwordConfirmation;
            var raw = JSON.stringify(state);
            state.passwordConfirmation=undefined;
            document.getElementById("passwordConfirmation").value="";

            var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://thepomodoro.herokuapp.com/user", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.message==="New user created"){
                    fetch('https://thepomodoro.herokuapp.com/login', {
                        method: 'GET',
                        headers: {
                            "Authorization" : "Basic "+base64.encode(`${state.username}:${state.password}`),
                        },
                        redirect: 'follow',
                        
                    })
                    .then(response => response.json())
                    .then(result => {
                        localStorage.setItem("username", state.username);
                        localStorage.setItem("token", result.token);
                        localStorage.setItem("logged", true);
                    })
                    .catch(error => {
                        alert(error.message);
                        //console.log(error);
                    });
                    window.location.href='/';
                }else if(result.message==="Username already exists"){
                    alert("O utilizador já existe");
                }else if(result.message==="Token is invalid" || result.message==="Token is missing!"){
                    localStorage.setItem("username", "");
                    localStorage.setItem("logged", false);
                }else{
                    alert("Preencha todos os campos corretamente");
                }
            })
            .catch(error => alert(error.message));
        }else{
            document.getElementById("passwordConfirmation").style.background="pink";
        }
    }
    function setName(e){state.name = e.target.value;}
    function setEmail(e){state.email = e.target.value;}
    function setUsername(e){state.username = e.target.value;}
    function setPassword(e){state.password = e.target.value;}
    function setPasswordConfirmation(e){state.passwordConfirmation = e.target.value;}

    return (
        <div id="sign">
            <div id="inner">
                <h1>The Pomodoro</h1>

                <label>Nome</label>
                <input id="name" type="text" value={state.username} onChange={setName}></input>

                <label>Email</label>
                <input id="email" type="text" value={state.password} onChange={setEmail}></input>

                <label>Username</label>
                <input id="username" type="text" value={state.username} onChange={setUsername}></input>

                <label>Password</label>
                <input id="password" type="password" value={state.password} onChange={setPassword}></input>

                <label>Confirmação da password</label>
                <input id="passwordConfirmation" type="password" value={state.passwordConfirmation} onChange={setPasswordConfirmation}></input>

                <a href="/signin">Ainda não se registou? Clique aqui</a>

                <button onClick={signup}>Sign Up</button>
            </div>
        </div>
    );
};