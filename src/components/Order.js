import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.shape({
      image: PropTypes.string,
      desc: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    }),
    orders: PropTypes.object,
    deleteOrder: PropTypes.func,
  };

  // To calculate the total price.
  calcTotalPrice = () => {
    const total = Object.keys(this.props.orders).reduce((sum, order) => {
      const fish = this.props.fishes[order];
      const count = this.props.orders[order];

      // If there is fish with that index and is available;
      const isavailable = fish && fish.status === 'available' ? true : false;

      if (isavailable) {
        return sum + count * fish.price;
      }
      return sum;
    }, 0);

    return total;
  };

  // Render list of order.
  renderOrder = order => {
    const fish = this.props.fishes[order];
    const count = this.props.orders[order];

    // If there is fish with that index and is available;
    const isavailable = fish && fish.status === 'available' ? true : false;

    // Make sure the fish is available.
    if (!fish) return null;

    if (!isavailable) {
      return (
        <li key={order}>
          Sorry{' '}
          {fish
            ? fish.name + 'has been sold out'
            : 'fish is no longer availble'}
        </li>
      );
    }

    return (
      <CSSTransition timeout={300} classNames="order" key={order}>
        <li key={order}>
          <TransitionGroup component="span" className="count">
            <CSSTransition timeout={300} classNames="count" key={count}>
              <span>{`${count} lbs`}</span>
            </CSSTransition>
          </TransitionGroup>
          <span>
            {fish.name} {formatPrice(fish.price * count)}
          </span>
          <button onClick={() => this.props.deleteOrder(order)}>&times;</button>
        </li>
      </CSSTransition>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="order">
          <h2>Order</h2>

          <TransitionGroup component="ul" className="order">
            {Object.keys(this.props.orders).map(this.renderOrder)}
          </TransitionGroup>

          <div className="total">
            <span>Total:</span>
            <strong>{formatPrice(this.calcTotalPrice())}</strong>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Order;
