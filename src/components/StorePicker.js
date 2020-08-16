import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';



class StorePicker extends React.Component {

	static propTypes = {
		history: PropTypes.object,
	}


	constructor() {
		super();

		this.state = {
			storeName: getFunName(),
		}
	}


	// Handle change on input store name.
	handleChange = ( e ) => {

		this.setState( { storeName: e.target.value } );
	}



	// Redirecting to store page. 
	goToStore = ( e ) => {
		e.preventDefault();

		this.props.history.push( `store/${this.state.storeName}` );
	}



	render() {
		return (
			<React.Fragment>
				<form className="store-selector" onSubmit={ this.goToStore } >
					<h2>Please Enter A Store</h2>
					<input type="text" required placeholder="Store Name" onChange={ this.handleChange} value={ this.state.storeName } />
					<button type="submit">Visit Store &rarr;</button>
				</form>
			</React.Fragment>
		);
	}
}

export default StorePicker;