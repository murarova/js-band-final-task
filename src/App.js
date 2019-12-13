import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Books from './pages/Books/Books';
import PageNotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import BookPage from './pages/BookPage/BookPage';
import ProtectedComponent from './hoc/ProtectedComponent';
import './styles/index.scss';

const App = () => (
    <>
        <Switch>
            <Route path="/login" component={Login} />
            <Redirect exact path="/" to="/books" />
            <ProtectedComponent exact path="/books" component={Books} />
            <ProtectedComponent path="/books/:id" component={BookPage} />
            <Route component={PageNotFound} />
        </Switch>
        <ToastContainer />
    </>
);

export default App;
