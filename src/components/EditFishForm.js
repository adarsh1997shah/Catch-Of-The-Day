import React from 'react';

class EditFishForm extends React.Component {

	// handle change in any sample fish form and reflect everywhere.
	handleChange = ( e ) => {
		this.props.editFish( this.props.index, e.target.name, e.target.value );
	}


	// Deleting the particular fish.
	handleClick = () => {
		this.props.deleteFish( this.props.index );
	}



	render() {
		const { image, desc, name, price, status } = this.props.details;

		return(
			<React.Fragment>
				<div className="fish-edit">
					<input 
						type="text"
						name="name"
						value={name}
						placeholder="Fish Name" 
						required
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="price"
						value={price}
						placeholder="Fish Price"
						required
						onChange={this.handleChange}
					/>

					<select 
						name="status" 
						onChange={this.handleChange} 
						value={status} 
					>
						<option value="available">Fresh</option>
						<option value="unavailable">Sold Out</option>
					</select>

					<textarea 
						name="desc" 
						value={desc} 
						placeholder="Fish Description" 
						required 
						onChange={this.handleChange} 
					></textarea>
					<input 
						type="text" 
						name="image" 
						value={image} 
						placeholder="Fish Image" 
						onChange={this.handleChange}
					/>
					<button onClick={ this.handleClick }>Remove Fish</button>
				</div>
			</React.Fragment>	
		);
	}
}

export default EditFishForm;