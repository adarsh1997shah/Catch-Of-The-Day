import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {

	render() {
		return(
			<React.Fragment>
				<div className="inventory">
					<h2>Inventory</h2>

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

export default Inventory;