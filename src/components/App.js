import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { base } from '../base';



class App extends React.Component {

	static propTypes = {
		match: PropTypes.object
	}


	constructor() {
		super();

		this.state = {
			fishes: {},
			orders: {}
		}
	}


	componentDidMount(){

		// Getting localstorage item.
		const localStorageRef = localStorage.getItem( this.props.match.params.store );

		// If stored in local storage.
		if( localStorageRef ) {
			this.setState( { orders: JSON.parse(localStorageRef) } );
		}

		this.ref = base.syncState(`${this.props.match.params.store}/fishes`, {
		  context: this,
		  state: 'fishes',
		})
	}


	componentDidUpdate() {
		localStorage.setItem( this.props.match.params.store, JSON.stringify( this.state.orders ) );
	}


	componentWillUnmount() {
		base.removeBinding( this.ref );
	}


	// Adding fish from the inventory.
	addFish = ( fish ) => {

		const { fishes } = this.state;
		fishes[`fish${Object.keys(fishes).length + 1}`] = fish;

		this.setState( { fishes } );
	}


	// Edit fish from the enventory.
	editFish = ( fish, property, value  ) => {

		const { fishes } = this.state;
		fishes[fish][property] = value;

		this.setState( { fishes } );
	}


	// Delete fish from the enventory.
	deleteFish = ( fish ) => {

		const { fishes } = this.state;
		fishes[fish] = null;

		this.setState( { fishes } );
	}


	// Loading sample fishes.
	loadSampleFish = () => {

		this.setState( { fishes: sampleFishes } );
	}


	// Loading the order.
	addOrder = ( ordered ) => {

		const { orders } = this.state;

		if( orders[ordered] ) {
			orders[ordered]++;
		} else {
			orders[ordered] = 1;
		}

		this.setState( { orders } );
	}


	// Delete order.
	deleteOrder = ( order ) => {

		const { orders } = this.state;
		delete orders[order];

		this.setState( { orders } );
	}

	render() {
		return(
			<React.Fragment>
				<div className="catch-of-the-day">
					<div className="menu">
						<Header tagline="Fresh Seafood Market" />

						
						<TransitionGroup className="fishes" component="ul">
						{
							Object.keys( this.state.fishes ).map( (fish , index) => {
								return (
									<CSSTransition key={fish} classNames="fish" timeout={300}>
									<Fish
										key={fish}
										index={fish}
										transitionIndex={index}
										details={this.state.fishes[fish]}
										addOrder={this.addOrder}
									/>
									</CSSTransition>
								)
							} )
						}
						</TransitionGroup>
					</div>

					<Order 
						fishes={this.state.fishes}
						orders={this.state.orders}
						deleteOrder={this.deleteOrder}
					/>
					
					<Inventory 
						addFish={this.addFish}
						loadSampleFish={this.loadSampleFish}
						fishes={this.state.fishes}
						editFish={this.editFish}
						deleteFish={this.deleteFish}	
					/>
				</div>
			</React.Fragment>	
		);
	}
}

export default App;