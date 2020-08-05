import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';



class Inventory extends React.Component {

	static propTypes = {
		fishes: PropTypes.shape( {
			image: PropTypes.string,
			desc: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			status: PropTypes.string
		} ),
		details: PropTypes.shape( {
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
	}

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