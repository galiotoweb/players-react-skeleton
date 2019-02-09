import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <header>
    <h1 className="intro">{props.title}</h1>
    <h2 className="intro-subheading">{props.subheading}</h2>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
};

Header.defaultProps = {
  title: 'Mad Libs',
  subheading: 'A React Game',
};

export default Header;
