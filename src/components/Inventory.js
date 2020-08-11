import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import firebase from 'firebase/app';
import 'firebase/auth';
import { base } from '../base';



class Inventory extends React.Component {

	static propTypes = {
		fishes: PropTypes.shape( {
			image: PropTypes.string,
			desc: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			status: PropTypes.string
		} ),
		index: PropTypes.string,
		editFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFish: PropTypes.func,
		addFish: PropTypes.func,
		storeId: PropTypes.string,
	}


	constructor( props ) {
		super( props );

		this.state = {
			isLoading: true,
			uid: null,
			owner: null,
			name: null,
			current: null,
		}
	}


	componentDidMount() {

		firebase.auth().onAuthStateChanged( ( user ) => {
			if( user ) {
				//firebase.auth().signOut()
				this.authHandler( { user } );

				base.post( 'CurrentUrl', {
					data: this.props.storeId,
				} );
			}else {
				this.setState( { isLoading: false } );
			}
		} );
	}



	// Handle the authenticated user.
	authHandler = ( response ) => {

		let userDetails = {};
		this.setState( { isLoading: true } );

		base.fetch( this.props.storeId, {
			context: this,

		} ).then( ( data ) => {

			// Check if the owner exists.
			if( !data.owner ) {

				userDetails = {
					uid: response.user.uid,
					email: response.user.email,
					name: response.user.displayName,
				}

				base.post( `${this.props.storeId}/owner`, {
					data: {...userDetails}
				} );
			}

			this.setState( {
				isLoading: false,
				uid: response.user.uid,
				owner: data.owner? data.owner.uid : '' || response.user.uid,
				name: response.user.displayName,
			} );

		} ).catch( ( err ) => {
			console.log( 'Opps you have an error ' + err.message);
		} )
	}



	// Authenticate the user.
	authenticate = ( loginMethod ) => {
		const provider = new firebase.auth[`${loginMethod}AuthProvider`]();

		firebase.auth().signInWithPopup( provider )
			.then( this.authHandler )
			.catch( ( err ) => {
			console.log( 'Opps you got some error! ' + err.message );
		} );
	}


	// Logging the user out.
	logout = () => {
		firebase.auth().signOut()
			.then( () => {
				console.log( 'sign out successfull' );

				this.setState( { uid: null, current: null } );

				base.post( 'CurrentUrl', {
					data: '',
				} );
			} )
			.catch( ( err ) => {
				console.log( 'Opps problem with signing out', err.message );
			} )
	}


	render() {
		if( this.state.isLoading ) {
			return (
				<React.Fragment>
					<div className="inventory">
						<h2>Inventory</h2>
					</div>
				</React.Fragment>
			);
	
		} else {
			if( !this.state.uid ) {
				return (
					<React.Fragment>
						<Login authenticate={this.authenticate} />
					</React.Fragment>	
				);
			}


			if( this.state.uid !== this.state.owner ) {
				return (
					<React.Fragment>
						<div>
							<button onClick={this.logout}>Log Out</button>
							<div>Sorry you are not the owner</div>
						</div>
					</React.Fragment>
				);
			}

			return(
				<React.Fragment>
					<div className="inventory">
						<h2>Inventory</h2>

						<h4><center>Welcome, {this.state.name}</center></h4>

						<button onClick={this.logout}>Log Out</button>
					
						{
							Object.keys( this.props.fishes ).map( ( fish ) => {
								return <EditFishForm
											key={fish}
											index={fish}
											details={this.props.fishes[fish]}
											editFish={this.props.editFish}
											deleteFish={this.props.deleteFish}
										/>
							} )
						}
						<AddFishForm addFish={this.props.addFish} />
						<button onClick={this.props.loadSampleFish}>Load Sample Fishes</button>
					</div>
					</React.Fragment>
			);
		}
	}
}

export default Inventory;