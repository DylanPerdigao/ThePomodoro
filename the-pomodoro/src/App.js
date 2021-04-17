import { Switch, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Publish from './pages/Publish'
import './App.css';
import './styles/Header.css';
import './styles/Home.css';
import './styles/Sign.css';
import './styles/Post.css';
import './styles/Profile.css';
import './styles/Publish.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Header/>
      <div>
        <Switch id="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
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
