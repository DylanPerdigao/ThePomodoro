import logo from './logo.svg';
import { Switch, Route, useLocation, Link } from 'react-router-dom';
import home from './pages/Home'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import './App.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Header/>
      <content>
        <Switch id="main">
        <Route path="/" component={home} />
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
*/
