/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { getToken } from '../../redux/selectors/selectors';
import Header from '../../components/Header/Header';
import { matchType, tokenType } from '../../constants/types';

const Login = ({ token, match }) => (
    <>
        {token ? (
            <Redirect to="/books" />
        ) : (
            <>
                <Header match={match} />
                <AuthForm />
            </>
        )}
    </>
);

Login.defaultProps = {
    token: '',
};

Login.propTypes = {
    match: matchType,
    token: tokenType,
};

const mapStateToProps = state => ({
    token: getToken(state),
});

export default connect(mapStateToProps)(Login);
