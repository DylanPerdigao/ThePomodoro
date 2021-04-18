import '../styles/Sign.css';
let base64 = require('base-64');

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const state = {
        username: "",
        password: ""
    }

    const setUsername = (event) => {
        state.username = event.target.value;
    }
    const setPassword = (event) => {
        state.password = event.target.value;
    }

    const signin = () => {

        // fetch('http://127.0.0.1:5000/login', {   //local
        fetch('https://thepomodoro.herokuapp.com/login', {
            method: 'GET',
            headers: {
                "Authorization" : "Basic "+base64.encode(`${state.username}:${state.password}`),
            },
            redirect: 'follow',
            
        })
        .then(response => response.json())
        .then(result => {
            if(result.message==="Token is invalid" || result.message==="Token is missing!"){
                localStorage.setItem("username", "");
                localStorage.setItem("logged", false);
            }else{
                localStorage.setItem("token", result.token);
                localStorage.setItem("logged", true);
                localStorage.setItem("username", state.username);
                window.location.href = `/profile/${state.username}`
            }
        })
        .catch(error => {
            alert(error.message);
            //console.log(error);
        });

        //console.log(localStorage.getItem("token"))
    }

    return (
        <div id="sign">
            <div id="inner">
                <h1>The Pomodoro</h1>

                <label>Username</label>
                
                <input type="text" onChange = {setUsername}></input>

                <label>Password</label>
                <input type="text" onChange = {setPassword}></input>

                <a href = "/signup">Ainda não se registou? Clique aqui</a>

                <button onClick = {signin}>Sign In</button>
            </div>
        </div>
    );
};