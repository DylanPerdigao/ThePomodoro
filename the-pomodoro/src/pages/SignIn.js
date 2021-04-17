// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const signin = () => {

        fetch(`https://thepomodoro.herokuapp.com/login?username=${"teste"}&password=${"teste"}`, {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
        })
        .then(response => response.body)
        .then(result => console.log(result))
        .catch(error => {
            alert('Unable to reach API.');
            console.log(error);
        });
    }

    return (
        <div id="sign">
            <div id="inner">
                <h1>The Pomodoro</h1>

                <label>Username</label>
                
                <input type="text"></input>

                <label>Password</label>
                <input type="text"></input>

                <a href = "/signup">Ainda não se registou? Clique aqui</a>

                <button onClick = {signin}>Sign In</button>
            </div>
        </div>
    );
};