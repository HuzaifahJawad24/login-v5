import React from 'react';
import { Switch, Route} from "react-router-dom";

import Login from "./views/login";
import Master from "./views/master";

import './css/inputfields.css'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/master" component={Master} />
    </Switch>
  );
}

export default App;