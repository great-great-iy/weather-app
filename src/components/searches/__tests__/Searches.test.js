import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Search from '../components/search/Search';
import SearchResult from '../components/searchResult/SearchResult';
import Searches from '../Searches';
configure({ adapter: new Adapter() });



describe('Searches Component', () => {
  const wrapper = shallow(<Searches />);
  
  it('Contains Search component', () => {
    expect(wrapper.find(Search).length).toBe(1)
  })
  
  it('Contains SearchResult component', () => {
    expect(wrapper.find(SearchResult).length).toBe(1)
  })
  
  it('Searches includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
 
});
