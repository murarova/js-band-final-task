import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';
import PageNotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import ProtectedComponent from './hoc/ProtectedComponent';
import './index.css';

const App = () => (
    <>
        <Switch>
            <Route path="/login" component={Login} />
            <Redirect exact path="/" to="/dashboard" />
            <ProtectedComponent path="/dashboard" component={Dashboard} />
            <Route component={PageNotFound} />
        </Switch>
        <ToastContainer />
    </>
);

export default App;
