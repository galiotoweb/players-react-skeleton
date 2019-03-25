import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({
  email, password, submit, change,
}) => (
  <React.Fragment>
    <form className="form-login" onSubmit={submit}>
      <label htmlFor="email">
        Email
        <input
          label="Email"
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={change}
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
          value={password}
          onChange={change}
        />
      </label>
      {/* <button>Cancel</button> */}
      <button type="submit" id="login">
        Login
      </button>
    </form>
  </React.Fragment>
);

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

// LoginForm.defaultProps = {
//   email: 'professor@planetexpressinc.com',
//   password: 'passw0rd',
// };

export default LoginForm;
