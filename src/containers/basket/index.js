import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket,
} from './../../actions';

import {
  getBasketPhonesWithCount,
  getTotalBasketPrice,
} from './../../selectors';

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket,
}) => {
  const isBasketEmpty = R.isEmpty(phones);
  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && <div>Your shopping cart is empty</div>}

        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {phones.map((phone, index) => (
                <tr key={index} className="item-checout">
                  <td className="first-column-checkout">
                    <img
                      className="img-thumbnail"
                      src={phone.image}
                      alt={phone.name}
                    />
                  </td>
                  <td>{phone.name}</td>
                  <td>${phone.price}</td>
                  <td>{phone.count}</td>
                  <td>
                    <span
                      onClick={() => removePhoneFromBasket(phone.id)}
                      className="delete-cart"
                    ></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {R.not(isBasketEmpty) && (
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total:</b>${totalPrice}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSidebar = () => (
    <div>
      <Link className="btn btn-info btn-block" to="/">
        <span className="glyphicon glyphicon-info-sign"></span>
        <span>Continue shopping!</span>
      </Link>
      {R.not(isBasketEmpty) && (
        <div>
          <div>
            <button onClick={cleanBasket} className="btn btn-danger btn-block">
              <span className="glyphicon glyphicon-trash"></span>
              <span>Clear cart</span>
            </button>
          </div>
          <div>
            <button
              className="btn btn-success btn-block"
              onClick={() => basketCheckout(phones)}
            >
              <span className="glyphicon glyphicon-envelope"></span>
              <span>Checkout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state),
  };
};

const mapDispatchToProps = {
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
