/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken } from '../redux/selectors/selectors';

// eslint-disable-next-line react/prop-types
const ProtectedComponent = ({ component: Component, token, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} token={token} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

ProtectedComponent.defaultProps = {
    token: '',
};

ProtectedComponent.propTypes = {
    token: PropTypes.string,
};

const mapStateToProps = state => ({
    token: getToken(state),
});

export default connect(mapStateToProps)(ProtectedComponent);
