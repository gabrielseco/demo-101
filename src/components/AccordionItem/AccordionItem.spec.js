import React from 'react';
import { shallow } from 'enzyme';
import { AccordionItem } from './AccordionItem';

describe('AccordionItem suite', () => {
  it('renders AccordionItem without any state injected', () => {
    const component = shallow(<AccordionItem />);
    expect(component).toBeDefined();
  });
});
