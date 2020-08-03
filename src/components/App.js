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
		this.ref = base.syncState(`${this.props.match.params.store}/fishes`, {
		  context: this,
		  state: 'fishes',
		  asArray: true
		});
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

					<Order fishes={this.state.fishes} orders={this.state.orders} />
					<Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish} />
				</div>
			</React.Fragment>	
		);
	}
}

export default App;