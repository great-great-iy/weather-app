import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchResult from '../components/searchResult/SearchResult';
configure({ adapter: new Adapter() });



describe('SearchResult Component', () => {
    const wrapper = shallow(<SearchResult />);

    it('SearchResult includes html elements', () => {
        expect(wrapper.find('div').length).toEqual(10);
        expect(wrapper.find('ul').length).toEqual(1);
        expect(wrapper.find('li').length).toEqual(2);
        expect(wrapper.find('img').length).toEqual(2);
        expect(wrapper.find('strong').length).toEqual(4);
    });

    it('SearchResult includes correct html innerText', () => {
    });
});
