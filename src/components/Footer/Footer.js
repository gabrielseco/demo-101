import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = props => (
  <footer className="Footer">
    <p>Gabriel García Seco</p>
    <p>Made with
        <i class="Footer-icon fa fa-heart-o" aria-hidden="true"></i>,
      Madrid 2017
    </p>
  </footer>
);

Footer.propTypes = {};

export default Footer;
