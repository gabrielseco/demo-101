import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Accordion.scss';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <dl class="Accordion">
        {this.props.children}
      </dl>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.node
};

export default Accordion;
