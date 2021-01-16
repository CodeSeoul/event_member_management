import React from 'react'
import '../styles/forms.css'

export default class Signin extends React.Component {
	constructor() {
		super()
		this.state = {
			userName: '',
			password: '',
		}
		// this.userInput = React.createRef()
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		const { name, value } = e.target
		this.setState({
			[name]: value,
		})
	}

	render() {
		return (
			<div className="form-container">
				<div className="wrap">
					<div className="form-inputs">
						<input
							type="text"
							name="username"
							placeholder="Enter Username"
							id="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<label for="username">Username</label>
					</div>

					<div className="form-inputs">
						<input
							name="password"
							id="password"
							type="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<label for="password">Password</label>
					</div>
					<div className="tac">
						<button>Log in</button>
					</div>
				</div>
			</div>
		)
	}
}
