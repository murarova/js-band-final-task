import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../redux/selectors/selectors';
import Header from '../../components/Header/Header';
import * as cartActions from '../../redux/actions/cartActions';
import EmptyCart from '../EmptyCart/EmptyCart';
import {
    cartType,
    purchaseRequestType,
    matchType,
} from '../../constants/types';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        const { cart, purchaseRequest } = this.props;
        purchaseRequest({ books: cart });
    };

    render() {
        const { cart, match } = this.props;

        const totalCartPrice = cart.reduce(
            (totalPrice, order) => totalPrice + order.totalPrice,
            0,
        );
        const roundPrice = Math.floor(totalCartPrice * 100) / 100;

        return (
            <>
                <Header match={match} />

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {cart && cart.length > 0 ? (
                                <>
                                    <div className="row">
                                        <div className="col-xs-12 justify-content-flex-end">
                                            <button
                                                type="button"
                                                className="btn btn-success purchase-btn"
                                                onClick={this.handleClick}
                                            >
                                                Purchase
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <table className="table">
                                                <thead>
                                                    <tr className="warning">
                                                        <th>Name</th>
                                                        <th>Count</th>
                                                        <th>Sum</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr className="success">
                                                        <th />
                                                        <th />
                                                        <th>
                                                            Total price:{' '}
                                                            {roundPrice} uah
                                                        </th>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    {cart.map(order => (
                                                        <tr key={order.id}>
                                                            <td>
                                                                {order.title}
                                                            </td>
                                                            <td>
                                                                {order.quantity}
                                                            </td>
                                                            <td>
                                                                {Math.floor(
                                                                    order.totalPrice *
                                                                        100,
                                                                ) / 100}{' '}
                                                                uah
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <EmptyCart />
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

ShoppingCart.propTypes = {
    cart: cartType.isRequired,
    match: matchType.isRequired,
    purchaseRequest: purchaseRequestType.isRequired,
};

const mapStateToProps = state => ({
    cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
    purchaseRequest: data => dispatch(cartActions.purchaseRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
