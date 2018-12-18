import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
import TodoComponent from './components/Todo';
//import Settings from './components/Settings';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import img from './logo.svg';


const LazySettings = Loadable(
    {
        loader: () => import('./components/Settings'),
        loading: Loading
    }
)

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/todo/123">todo- 123</Link>
                        </li>

                        <li>
                            <Link to="/settings">settings</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>                
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/settings" component={LazySettings} />
                    <Route path="/todo/:pk" component={TodoComponent} />
                    <Route component={Error404} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
