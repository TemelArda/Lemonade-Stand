import React from 'react';
import './assets/style/app.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Form from './pages/sales/form'
import Report from './pages/sales/report'





function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/sales/form' component = {Form}></Route>
        <Route path = '/sales/report' component = {Report}></Route>
      </Switch>
    </Router>
  );
}

export default App;
