import '../styles/Sign.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const signin = () => {
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdGU6dGVzdGU=");
        myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000/");
        myHeaders.append("Access-Control-Allow-Methods", "GET");
        //myHeaders.append("Access-Control-Allow-Headers", "Basic dGVzdGU6dGVzdGU=");
        

        fetch('https://thepomodoro.herokuapp.com/login', {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        })
        .then(response => response)
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