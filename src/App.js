import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Grid from "./components/Grid/Grid";

import Chart from "./components/Chart/Chart";

import Schedule from "./components/Schedule/Schedule";
import InputField from './components/Inputs/NormalTextBox/TextBox';
import Register from './components/Authentication/Register/register';
import Form from './components/Forms/Form';

function App() {
  return (
    <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Grid } />
          <Route path = "/Chart" component = { Chart } />
          <Route path = "/Schedule" component = { Schedule } />
          <Route path='/inputs' component={ InputField } />
          <Route path='/register' component={ Form } />


        </Switch>
        <Footer />
      </React.Fragment>
  );
}

export default App;
