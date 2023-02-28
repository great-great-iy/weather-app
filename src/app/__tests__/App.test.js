import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Content, Navbar } from '../../components/index.js';
configure({ adapter: new Adapter() });

import App from '../App.js';



describe('App Component', () => {
    const wrapper = shallow(<App />);

    it('Contains Navbar component', () => {
        expect(wrapper.find(Navbar).length).toBe(1)
    })

    it('Contains Content component', () => {
        expect(wrapper.find(Content).length).toBe(1)
    })

    it('App includes html elements', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

});
