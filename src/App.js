import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

/* Component Imports */
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

/* Style Imports */
import './styles/1-base/0-base-dir.sass';
import './styles/2-layouts/0-layouts-dir.sass';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Navbar />
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path={process.env.PUBLIC_URL + '/'} component={ Home } exact/>
                  <Route path={process.env.PUBLIC_URL + '/about'} component={ About } />
                  <Route path={process.env.PUBLIC_URL + '/services'} component={ Services } />
                  <Route path={process.env.PUBLIC_URL + '/projects'} component={ Projects } />
                  <Route path={process.env.PUBLIC_URL + '/contact'} component={ Contact } />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          
        </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
