import React from 'react';
import PropTypes from 'prop-types';


class Login extends React.Component{

	static propTypes = {
		authenticate: PropTypes.func.isRequired
	}

	render() {
		return (
			<React.Fragment>
				<nav className="login">
					<h2>Inventory Login</h2>
					<p>Sign in to manage your {'store\'s'} Inventory</p>
					<button
						className="facebook"
						onClick={ () => this.props.authenticate( 'Facebook' ) }
					>
						Log In With Facebook
					</button>

					<button
						className="github"
						onClick={ () => this.props.authenticate( 'Github' ) }
					>
						Log In With GitHub
					</button>
				</nav>
			</React.Fragment>
		)
	}
}


export default Login;