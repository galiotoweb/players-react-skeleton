import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(
        'https://players-api.developer.alchemy.codes/api/login',
        JSON.stringify(userInfo),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        this.setState({
          loggedIn: true,
        });
        localStorage.setItem('token', response.data.token);
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
        {this.state.loggedIn ? (
          <Redirect to="/roster" />
        ) : (
          <LoginForm
            data={userInfo}
            submit={this.handleSubmit}
            change={this.handleInputChange}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Login;
