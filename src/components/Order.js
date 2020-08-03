import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

	// To calculate the total price.
	calcTotalPrice = () => {
		const total = Object.keys( this.props.orders ).reduce( (sum, order ) => {
			const fish = this.props.fishes[order];
			const count = this.props.orders[order];

			// If there is fish with that index and is available;
			const isavailable = fish && fish.status === 'available'? true : false;

			if( isavailable ) {
				return sum + (count * fish.price);
			}
			return sum;
		}, 0 );

		return total;
	}


	// Render list of order.
	renderOrder = ( order ) => {
		const fish = this.props.fishes[order];
		const count = this.props.orders[order];

		// If there is fish with that index and is available;
		const isavailable = fish && fish.status === 'available'? true : false;

		if( !isavailable ) {
			return <li key={order}>Sorry {fish ? fish.name + 'has been sold out' : 'fish is no longer availble'}</li>
		}

		return <li key={order}>{count}lbs {fish.name} {formatPrice( fish.price * count )}</li>
	}


	render() {
		return(
			<React.Fragment>
				<div className="order">
					<h2>Order</h2>

					<ul className="order">
						{
							Object.keys( this.props.orders ).map( this.renderOrder )
						}
					</ul>

					<div className="total">
						<span>Total:</span><strong>{formatPrice(this.calcTotalPrice())}</strong>
					</div>
				</div>
			</React.Fragment>	
		);
	}
}

export default Order;