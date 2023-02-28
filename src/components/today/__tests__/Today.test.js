import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Today from '../Today';
configure({ adapter: new Adapter() });



describe('Today Component', () => {
  const wrapper = shallow(<Today />);
  
  it('Today includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(38);
    expect(wrapper.find('svg').length).toEqual(7);
    expect(wrapper.find('circle').length).toEqual(1);
    expect(wrapper.find('line').length).toEqual(8);
    expect(wrapper.find('path').length).toEqual(7);
    expect(wrapper.find('span').length).toEqual(2);
  });

  it('Today includes correct html innerText', () => {
  }); 
});