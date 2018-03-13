import React from 'react';
import { shallow } from 'enzyme';
import { Accordion } from './Accordion';

describe('Accordion suite', () => {
  it('renders Accordion without any state injected', () => {
    const component = shallow(<Accordion />);
    expect(component).toBeDefined();
  });
});
