import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Books from './pages/Books/Books';
import PageNotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import OneBookPage from './pages/OneBookPage/OneBookPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ProtectedComponent from './hoc/ProtectedComponent';
import './styles/index.scss';

const App = () => (
    <>
        <Switch>
            <Route path="/login" component={Login} />
            <Redirect exact path="/" to="/books" />
            <ProtectedComponent exact path="/books" component={Books} />
            <ProtectedComponent path="/books/:id" component={OneBookPage} />
            <ProtectedComponent path="/cart" component={ShoppingCart} />
            <Route component={PageNotFound} />
        </Switch>
        <ToastContainer />
    </>
);

export default App;
