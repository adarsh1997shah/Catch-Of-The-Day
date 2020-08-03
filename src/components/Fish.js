import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {

	// handle the fish to order.
	handleClick = () => {
		this.props.addOrder(this.props.index);
	}

	
	render() {
		const { image, desc, name, price, status } = this.props.details;
		const isavailable = status === 'available'? true : false;

		return(
			<React.Fragment>
				<li className="menu-fish">
					<img src={image} alt={name} />
					<h3 className="fish-name">
						{ name }

						<span className="price">{formatPrice(price)}</span>
					</h3>
					<p>{desc}</p>
					<button disabled={!isavailable} onClick={ this.handleClick } >
						{ isavailable? 'Add To Cart' : 'Sold Out!' }
					</button>
				</li>
			</React.Fragment>	
		);
	}
}

export default Fish;