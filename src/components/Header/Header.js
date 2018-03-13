import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = props => (
  <header className="Header">
    <h2 className="Header-title">{props.title}</h2>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
