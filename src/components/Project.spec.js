import React from 'react';
import Project from './Project';
import { shallow } from 'enzyme';

it('projectName renders in the page', () => {
  const wrapper = shallow(<Project projectName={"Electronics"}/>);
  expect(wrapper.find('.Title').text()).toEqual('Electronics');
});

it('owner renders in the page', () => {
    const wrapper = shallow(<Project projectName={"Electronics"} owner={"John"}/>);
    expect(wrapper.find('.SubTitle').text()).toEqual('John');
});