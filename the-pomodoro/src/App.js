import logo from './logo.svg';
import { Switch, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header'
import SignIn from './components/signIn/SignIn'
import SignUp from './components/signIn/SignIn'
import './App.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  return (
    <>
      <Header/>
      <content>
        <Switch id="main">
        {/*<Route path="/" component={home} /> */}
        <Route path="/signin" component={SignIn}>
        </Route>
        <Route path="/signup" component={SignUp}>
        </Route>
        </Switch>
      </content>
    </>
  );
};

/*
function App() {
  return SearchRecipe();
  //return Header();
  //return SignUp();
  //return Login();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function SignIn(){
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
}

function SignUp(){
  return (
    <div id="sign">
			<form>
				<div className="title">The Pomodoro</div>

				<div className="label">Username</div>
				<div className="input"><input type="text"></input></div>
	
				<div className="label">Password</div>
				<div className="input"><input type="text"></input></div>

				<div className="label">Confirmação da password</div>
				<div className="input"><input type="text"></input></div>
	
				<div className="link"><a>Ainda não se registou? Clique aqui</a></div>
	
				<div className="button"><input type="submit" value="Sign Up"></input></div>
			</form>
		</div>
  );
}

function Header(){
  return (
    <div id="navbar">
			<ul>
				<li style={{float:"left"}}><a>The Pomodoro</a></li>
				<li><a>Perfil</a></li>
				<li><input type="text" value="Pesquisar"></input></li>
			</ul>
		</div>
  );
}

function SearchRecipe(){
  return (
    <div id="search">
    <form>
      <div className="label">Procurar receita por ingredientes</div>
      <div className="input"><input type="text" placeholder="Nome da receita ou dos ingredientes"></input></div>
      </form>
    </div>
  )
}
*/
