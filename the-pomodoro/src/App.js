import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Search from './pages/Search'
import Recipe from './pages/Recipe/Recipe'
import Profile from './pages/Profile/Profile'
import Publish from './pages/Publish/Publish'
import './App.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Header/>
      <div>
        <Switch id="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/publish" component={Publish} />
        </Switch>
      </div>
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
