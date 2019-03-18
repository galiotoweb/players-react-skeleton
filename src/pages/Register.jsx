import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    };

    axios
      .post(
        'https://players-api.developer.alchemy.codes/api/user',
        JSON.stringify(newUser),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        if (response.data.success === true) {
          this.props.history.push('/roster');
        } else {
          console.log('whomp whomp');
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Register Page</h1>
        <p>Register a New Player</p>
        <form className="form-register" onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            First Name
            <input
              label="First Name"
              type="text"
              id="firstName"
              name="first_name"
              required
              value={this.state.first_name}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="last_name">
            Last Name
            <input
              label="Last Name"
              type="text"
              id="lastName"
              name="last_name"
              required
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              label="Email"
              type="email"
              id="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              label="Password"
              type="password"
              id="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="confirmPassword">
            Confirm Password
            <input
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirm_password"
              required
              value={this.state.confirm_password}
              onChange={this.handleInputChange}
            />
          </label>
          <button>Cancel</button>
          <button type="submit" id="register">
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default Register;
