import '../styles/Sign.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {


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

                <button>Sign Up</button>
            </div>
        </div>
    );
};