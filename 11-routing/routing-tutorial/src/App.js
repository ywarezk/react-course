import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';

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
                    </ul>
                </nav>

                <Switch>                
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route component={Error404} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
