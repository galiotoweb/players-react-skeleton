import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      loggedIn: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    if (token !== '') {
      this.setState({ loggedIn: true });
    } else {
      // handle empty string
      this.setState({ loggedIn: false });
    }
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
          this.setState({
            loggedIn: true,
          });
          localStorage.setItem('token', response.data.token);
        }
      });
  }

  render() {
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    };
    return (
      <React.Fragment>
        <h1>Register Page</h1>
        <p>Register a New Player</p>
        {this.state.loggedIn ? (
          <Redirect to="/roster" />
        ) : (
          <RegisterForm
            data={newUser}
            submit={this.handleSubmit}
            change={this.handleInputChange}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Register;
