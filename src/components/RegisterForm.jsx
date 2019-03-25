import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  submit,
  change,
}) => (
  <form className="form-register" onSubmit={submit}>
    <input
      placeholder="First Name"
      type="text"
      id="firstName"
      name="first_name"
      required
      value={firstName}
      onChange={change}
    />
    <input
      placeholder="Last Name"
      type="text"
      id="lastName"
      name="last_name"
      required
      value={lastName}
      onChange={change}
    />
    <input
      placeholder="Email"
      type="email"
      id="email"
      name="email"
      required
      value={email}
      onChange={change}
    />
    <input
      placeholder="Password"
      type="password"
      id="password"
      name="password"
      required
      value={password}
      onChange={change}
    />
    <input
      placeholder="Confirm Password"
      type="password"
      id="confirmPassword"
      name="confirm_password"
      required
      value={confirmPassword}
      onChange={change}
    />
    <button type="submit">Register</button>
  </form>
);

RegisterForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

// RegisterForm.defaultProps = {
//   firstName: 'Hubert',
//   lastName: 'Farnsworth',
//   email: 'professor@planetexpressinc.com',
//   password: 'passw0rd',
//   confirmPassword: 'passw0rd',
// };

export default RegisterForm;
