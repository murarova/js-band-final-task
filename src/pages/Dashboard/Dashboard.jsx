import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { match } = this.props;
        return (
            <>
                <Header match={match} />
                <h1>Dashboard</h1>
            </>
        );
    }
}

Dashboard.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
        params: PropTypes.shape({
            id: PropTypes.node,
        }).isRequired,
    }).isRequired,
};

export default Dashboard;
