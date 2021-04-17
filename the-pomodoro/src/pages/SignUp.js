// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const signin = () => {

        fetch(`https://thepomodoro.herokuapp.com/login?username=${"teste"}&password=${"teste"}`, {
            method: 'POST',
            redirect: 'follow',
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => alert('Unable to reach API.'));
    }

    return (
        <div id="sign">
            <div id="inner">
                <h1>The Pomodoro</h1>

                <label>Username</label>
                <input type="text"></input>

                <label>Password</label>
                <input type="password"></input>

                <label>Confirmação da password</label>
                <input type="password"></input>

                <a href="/signin">Ainda não se registou? Clique aqui</a>

                <button onClick={signin}> Sign Up</button>
            </div>
        </div>
    );
};