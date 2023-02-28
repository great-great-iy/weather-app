import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Search from '../components/search/Search.js';
configure({ adapter: new Adapter() });


describe('Search Component', () => {
    const wrapper = shallow(<Search />);

    it('Search includes html elements', () => {
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('input').length).toEqual(1);
    });

});
