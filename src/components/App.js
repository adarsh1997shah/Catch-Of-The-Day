import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import { base } from '../base';



class App extends React.Component {

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
		});
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

						<ul className="fishes">
						{
							Object.keys( this.state.fishes ).map( (fish) => {
								return <Fish key={fish} index={fish} details={this.state.fishes[fish]} addOrder={this.addOrder} />
							} )
						}
						</ul>
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