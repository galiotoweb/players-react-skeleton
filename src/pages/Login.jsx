import React from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(
        'https://players-api.developer.alchemy.codes/api/login',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        console.log('success');
      });
  }

  render() {
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    };

    return (
      <React.Fragment>
        <h1>Log in</h1>
        <LoginForm
          data={userInfo}
          submit={this.handleSubmit}
          change={this.handleInputChange}
        />
      </React.Fragment>
    );
  }
}

export default Login;
