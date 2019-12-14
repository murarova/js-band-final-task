import React from 'react';
import Icon from '../../components/Icon/Icon';

const EmptyCart = () => (
    <>
        <div className="row margin-top-30">
            <div className="col-xs-12 justify-content-center">
                <Icon icon="ShoppingCart" className="empty-cart" />
            </div>
        </div>
        <div className="row margin-top-30">
            <div className="col-xs-12  justify-content-center">
                <p>Your shopping cart is empty...</p>
            </div>
        </div>
    </>
);

export default EmptyCart;
