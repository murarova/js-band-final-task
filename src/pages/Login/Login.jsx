import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthForm from '../../components/AuthForm/AuthForm';
import { getToken } from '../../redux/selectors/selectors';
import Header from '../../components/Header/Header';

const Login = ({ token, match }) => (
    <>
        {token ? (
            <Redirect to="/dashboard" />
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
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
        params: PropTypes.shape({
            id: PropTypes.node,
        }).isRequired,
    }).isRequired,
    token: PropTypes.string,
};

const mapStateToProps = state => ({
    token: getToken(state),
});

export default connect(mapStateToProps)(Login);
