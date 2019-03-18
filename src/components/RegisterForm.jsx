import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = props => (
  <form className="form-register" onSubmit={props.submit}>
    <input
      placeholder="First Name"
      type="text"
      id="firstName"
      name="first_name"
      required
      value={props.first_name}
      onChange={props.change}
    />
    <input
      placeholder="Last Name"
      type="text"
      id="lastName"
      name="last_name"
      required
      value={props.last_name}
      onChange={props.change}
    />
    <input
      placeholder="Email"
      type="email"
      id="email"
      name="email"
      required
      value={props.email}
      onChange={props.change}
    />
    <input
      placeholder="Password"
      type="password"
      id="password"
      name="password"
      required
      value={props.password}
      onChange={props.change}
    />
    <input
      placeholder="Confirm Password"
      type="password"
      id="confirmPassword"
      name="confirm_password"
      required
      value={props.confirm_password}
      onChange={props.change}
    />
    <button type="submit">Register</button>
  </form>
);

RegisterForm.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirm_password: PropTypes.string,
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

// RegisterForm.defaultProps = {
//   first_name: 'Hubert',
//   last_name: 'Farnsworth',
//   email: 'professor@planetexpressinc.com',
//   password: 'passw0rd',
//   confirm_password: 'passw0rd',
// };

export default RegisterForm;
