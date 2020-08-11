import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';
import { base } from '../base';



class StorePicker extends React.Component {

	static propTypes = {
		history: PropTypes.object,
	}


	constructor() {
		super();

		this.state = {
			storeName: getFunName(),
			current: '',
			isLoading: true,
		}
	}


	componentDidMount() {

		base.fetch( 'CurrentUrl', {
			context: this,

		} ).then( ( data ) => {
			
			this.setState( { isLoading: false } );

			if( data !== '' ) {
				this.setState( { storeName: data, current: data } );
			}
		} )
	}



	// Handle change on input store name.
	handleChange = ( e ) => {

		if( !this.state.current ) {
			this.setState( { storeName: e.target.value } );
		}
	}



	// Redirecting to store page. 
	goToStore = ( e ) => {
		e.preventDefault();

		this.props.history.push( `store/${this.state.storeName}` );
	}



	render() {
		return (
			<React.Fragment>
			{
				this.state.isLoading?
				''
				:
				<form className="store-selector" onSubmit={ this.goToStore } >
					<h2>Please Enter A Store</h2>
					<input type="text" required placeholder="Store Name" onChange={ this.handleChange} value={ this.state.storeName } disabled={this.state.current ? true : false} />
					<button type="submit">Visit Store &rarr;</button>

					{
						this.state.current?
						<React.Fragment>
							<h4>Note:</h4>
							<p>You are logged into above url.You cant change it unless you log out of current url.</p>
						</React.Fragment>
						:
						''
					}
				</form>
			}
			</React.Fragment>
		);
	}
}

export default StorePicker;