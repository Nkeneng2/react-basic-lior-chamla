import React, {Component} from "react";
import "./styles.css";
import ClientManager from './ClientManager'
import About from './About'
import Nav from './Nav'
import {BrowserRouter as Router} from 'react-router-dom'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";


class App extends Component {
    render() {
        return (
          <Router>
              <div className="App">
                  <Nav/>
                  <Switch>
                      <Route path="/" exact component={ClientManager}/>
                      <Route path="/about" component={About}/>
                      <Route path="/client" component={ClientManager}/>
                  </Switch>
              </div>
          </Router>
        );
    }
}

export default App;
