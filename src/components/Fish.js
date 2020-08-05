import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';


class Fish extends React.Component {

	static propTypes = {
		details: PropTypes.shape( {
			image: PropTypes.string,
			desc: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			status: PropTypes.string
		} ),
		addOrder: PropTypes.func,
		index: PropTypes.string,
		transitionIndex: PropTypes.number
	}


	// handle the fish to order.
	handleClick = () => {
		this.props.addOrder(this.props.index);
	}

	
	render() {
		const { image, desc, name, price, status } = this.props.details;
		const isavailable = status === 'available'? true : false;

		return(
			<React.Fragment>
				<li
					className="menu-fish"
					style={{ 'transitionDelay': `${(parseInt(this.props.transitionIndex)+1) * 150}ms` }}
				>
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