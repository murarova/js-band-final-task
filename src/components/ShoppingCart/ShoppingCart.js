/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { bookType, onClickType } from '../../constants/types';
import * as notify from '../../utils/notification';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            title: props.book.title,
            totalPrice: props.book.price,
        };
        this.onChange = this.onChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    onChange(e) {
        const { value } = e.target;
        const { price, count } = this.props.book;

        if (value < 0 || value > count) {
            notify.error(`You can order from 0 to ${count} books`);
            this.setState({
                count: 1,
                totalPrice: price,
            });
            return;
        }

        const roundPrice = Math.floor(value * price * 100) / 100;

        this.setState({
            count: value,
            totalPrice: roundPrice,
        });
    }

    addToCart() {
        const { count, totalPrice, title } = this.state;
        const { onClick } = this.props;
        if (count > 0) {
            onClick(title, count, totalPrice);
        } else {
            notify.error('Please enter a quantity');
        }
    }

    render() {
        const { count, totalPrice } = this.state;
        const { book } = this.props;
        return (
            <div className="shoping-cart-wrapper">
                <div className="row">
                    <p className="col-sm-6">Price:</p>
                    <p className="price col-sm-6">{book.price} uah</p>
                </div>

                <div className="row">
                    <label
                        className="control-label col-sm-6"
                        htmlFor="count-input"
                    >
                        Count:
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="number"
                            name="count"
                            className="form-control"
                            id="count-input"
                            min="1"
                            max={book.count}
                            onChange={this.onChange}
                            value={count}
                        />
                    </div>
                </div>
                <div className="row book-stok">
                    <p className="col-sm-6">Stok: </p>
                    <p className="col-sm-6">{book.count} pcs.</p>
                </div>

                <div className="row">
                    <p className="col-sm-6">Total price: </p>
                    <p className="col-sm-6">{totalPrice} uah</p>
                </div>
                <div className="row justify-content-flex-end">
                    <div className="col-sm-6">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={this.addToCart}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    book: bookType.isRequired,
    onClick: onClickType.isRequired,
};

export default ShoppingCart;
