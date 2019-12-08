/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authRequest } from '../../redux/actions/authActions';
import * as notify from '../../utils/notification';
import { getError } from '../../redux/selectors/selectors';
import Icon from '../Icon/Icon';

const INITIAL_STATE = {
    nickname: '',
};

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target: { name, value } }) {
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        const { error, onSubmit } = this.props;

        e.preventDefault();

        const { username } = this.state;

        if (username.length < 4 || username.length > 16) {
            notify.error('The nickname should be between 4 and 16 symbols');
            return;
        }

        onSubmit({ ...this.state });

        if (error) {
            notify.error(error);
        }
    }

    render() {
        const { username } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center margin-top-30">
                    <div className="col-xs-8 col-sm-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="img-wrapper">
                                    <Icon icon="User" className="user-auth" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="type Username"
                                    value={username}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-info auth-btn"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AuthForm.defaultProps = {
    onSubmit: () => {},
    error: '',
};

AuthForm.propTypes = {
    onSubmit: PropTypes.func,
    error: PropTypes.string,
};

const mapStateToProps = state => ({
    error: getError(state),
});

const mapDispatchToProps = {
    onSubmit: authRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
