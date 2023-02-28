import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Searches from '../../searches/Searches.js';
configure({ adapter: new Adapter() });

import Content from '../Content.js';

import Today from '../../today/Today.js';

describe('Content Component', () => {
  let ContentProps = {"active":1};
  
  const wrapper = shallow(<Content {...ContentProps} />);
  
  it('Contains Searches component', () => {
    expect(wrapper.find(Searches).length).toBe(1)
  })
  
  it('Contains Today component', () => {
    expect(wrapper.find(Today).length).toBe(1)
  })
  
  it('Content includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
 
});
