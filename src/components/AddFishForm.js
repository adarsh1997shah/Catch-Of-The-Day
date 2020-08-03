import React from 'react';

class AddFishForm extends React.Component {

	constructor() {
		super();

		this.state = {
			name   : '',
			price  : '',
			status : 'available',
			desc   : '',
			image  : '',
		}

		// Taking reference to initial state
		this.initialstate = this.state;
	}

	// Handling changes to form input.
	handleChange = ( e ) => {
		this.setState( { [e.target.name]: e.target.value } );
	}

	// Handle form submit.
	handleSubmit = ( e ) => {
		e.preventDefault();

		// Changing fishprice property to integer.
		this.setState( { price: parseInt(this.state.price) } );

		this.props.addFish( this.state );

		// Resetting the form.
		this.setState( this.initialstate );
	}

	render() {
		return(
			<React.Fragment>
				<form className="fish-edit" onSubmit={this.handleSubmit}>
					<input type="text" name="name" value={this.state.name} placeholder="Fish Name" required onChange={this.handleChange} />
					<input type="text" name="price" value={this.state.price} placeholder="Fish Price" required onChange={this.handleChange} />

					<select name="status" onChange={this.handleChange} value={this.state.status} >
						<option value="available">Fresh</option>
						<option value="unavailable">Sold Out</option>
					</select>

					<textarea name="desc" value={this.state.desc} placeholder="Fish Description" required onChange={this.handleChange} ></textarea>
					<input type="text" name="image" value={this.state.image} placeholder="Fish Image" onChange={this.handleChange} />
					<button type="submit">Add Fish +</button>
				</form>
			</React.Fragment>	
		);
	}
}

export default AddFishForm;