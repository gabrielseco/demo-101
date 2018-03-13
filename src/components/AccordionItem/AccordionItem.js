import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './AccordionItem.scss';

const AccordionItem = props => (
  <Fragment>
    <dt class="Accordion-title">{props.title}</dt>
    <dd class="Accordion-description">
      <p class="Accordion-text">{props.description}</p>
    </dd>
    <dd class="Accordion-separator" aria-hidden="true"></dd>
  </Fragment>
);

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default AccordionItem;
