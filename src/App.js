import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Books from './pages/Books/Books';
import PageNotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import ProtectedComponent from './hoc/ProtectedComponent';
import './index.css';

const App = () => (
    <>
        <Switch>
            <Route path="/login" component={Login} />
            <Redirect exact path="/" to="/books" />
            <ProtectedComponent path="/books" component={Books} />
            <Route component={PageNotFound} />
        </Switch>
        <ToastContainer />
    </>
);

export default App;
