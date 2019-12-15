import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

import {
    matchType,
    logoutType,
    usernameType,
    avatarType,
} from '../../constants/types';
import * as authActions from '../../redux/actions/authActions';
import { getUsername, getAvatar } from '../../redux/selectors/selectors';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { match, logout, username, avatar } = this.props;

        return (
            <>
                {match.path.includes('/login') && (
                    <header>
                        <nav className="navbar navbar-light bg-primary">
                            <div className="container">
                                <div className="navbar-header">
                                    <p className="navbar-brand">
                                        JS-BAND STORE / Liubov Murarova
                                    </p>
                                </div>
                            </div>
                        </nav>
                    </header>
                )}

                {(match.path.includes('/book') ||
                    match.path.includes('/cart')) && (
                    <header>
                        <nav className="navbar navbar-light bg-primary">
                            <div className="container">
                                <div className="navbar-header">
                                    <button
                                        type="button"
                                        className="navbar-toggle collapsed toggle-btn"
                                        data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">
                                            Toggle navigation
                                        </span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    <Link
                                        to="/books"
                                        className="navbar-brand navbar-left white"
                                    >
                                        JS-BAND STORE / Liubov Murarova
                                    </Link>
                                </div>

                                <div
                                    className="collapse navbar-collapse"
                                    id="bs-example-navbar-collapse-1"
                                >
                                    <ul className="nav navbar-nav navbar-right menu">
                                        <li className="menu-item cart-item">
                                            <Link to="/cart">
                                                <Icon
                                                    icon="ShoppingCart"
                                                    className="shopping-cart white"
                                                />
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <button
                                                type="button"
                                                className="btn btn-default navbar-btn"
                                                onClick={logout}
                                            >
                                                Sign-Out
                                            </button>
                                        </li>
                                        <li className="menu-item">
                                            <div className="avatar-wrapper">
                                                <img
                                                    src={avatar}
                                                    alt="users avatar"
                                                />
                                            </div>
                                        </li>
                                        <li className="menu-item">
                                            <span>{username}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                )}
            </>
        );
    }
}

Header.defaultProps = {
    username: '',
    avatar: '',
};

Header.propTypes = {
    match: matchType.isRequired,
    logout: logoutType.isRequired,
    username: usernameType,
    avatar: avatarType,
};

const mapStateToProps = state => ({
    username: getUsername(state),
    avatar: getAvatar(state),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(authActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
