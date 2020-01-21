// IMPORT REACT
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// IMPORT STYLE CSS
import './App.css';

// IMPORT COMPONENTS
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


const App = () =>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Fragment>
    </Router>

export default App;