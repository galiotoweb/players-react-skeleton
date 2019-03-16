import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <header>
    <h1 className="intro">{props.title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Mad Libs',
};

export default Header;
