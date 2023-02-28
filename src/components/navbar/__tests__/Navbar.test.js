import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
configure({ adapter: new Adapter() });

import Navbar from '../Navbar.js';

describe('Navbar Component', () => {
  let mockhandlePicked = jest.fn();
  let NavbarProps = {"handlePicked":"mockhandlePicked"};
  
  const wrapper = shallow(<Navbar {...NavbarProps} />);
  
  it('Navbar includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(17);
    expect(wrapper.find('span').length).toEqual(3);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(4);
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('svg').length).toEqual(1);
    expect(wrapper.find('path').length).toEqual(1);
    expect(wrapper.find('circle').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(1);
  });

  it('Navbar includes correct html innerText', () => {
    expect(wrapper.find('h2').text()).toEqual("Tuesday");
    expect(wrapper.find('h1').text()).toEqual("19°C");
    expect(wrapper.find('h3').text()).toEqual("Clear Sky");
  }); 
});
