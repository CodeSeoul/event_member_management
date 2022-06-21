import React from 'react';
import '../styles/forms.css';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="wrap">
          <div className="form-inputs">
            <input
              className="form-info"
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label for="username">Username</label>
          </div>

          <div className="form-inputs">
            <input
              className="form-info"
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label for="email">Email</label>
          </div>

          <div className="form-inputs">
            <input
              className="form-info"
              name="password"
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label for="password">Password</label>
          </div>
          <div className="tac">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    );
  }
}
