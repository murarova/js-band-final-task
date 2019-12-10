/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-onchange */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as booksActions from '../../redux/actions/booksActions';
import { searchByTitleType } from '../../constants/types';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange(e) {
        const { searchByTitle } = this.props;
        searchByTitle(e.target.value);
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-xs-12">
                        <form>
                            <div className="col-xs-12 col-sm-9">
                                <div className="form-group width-100">
                                    <input
                                        type="text"
                                        className="form-control width-100"
                                        name="title"
                                        placeholder="search by book name"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-3">
                                <div className="form-group width-100">
                                    <select
                                        className="form-control width-100"
                                        name="price"
                                        onChange={this.onChange}
                                    >
                                        <option value="price">Price</option>
                                        <option value="low">
                                            from 0 to 15
                                        </option>
                                        <option value="middle">
                                            from 15 to 30
                                        </option>
                                        <option value="high">from 30</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

Filter.propTypes = {
    searchByTitle: searchByTitleType,
};

const mapDispatchToProps = dispatch => ({
    searchByTitle: () => dispatch(booksActions.searchByTitle()),
    filterByPrice: () => dispatch(booksActions.filterByPrice()),
});

export default connect(null, mapDispatchToProps)(Filter);
