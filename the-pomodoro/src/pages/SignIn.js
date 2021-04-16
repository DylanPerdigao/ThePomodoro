// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div id="sign">
            <form>
                <div className="title">The Pomodoro</div>

                <div className="label">Username</div>
                <div className="input"><input type="text"></input></div>
    
                <div className="label">Password</div>
                <div className="input"><input type="text"></input></div>
    
                <div className="link"><a>Ainda não se registou? Clique aqui</a></div>
    
                <div className="button"><input type="submit" value="Sign In"></input></div>
            </form>
        </div>
    );
};