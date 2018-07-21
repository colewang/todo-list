import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TodoBox from "./TodoBox";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<TodoBox />', () => {
    it('should render <TodoBox /> components', () => {
        const wrapper = shallow(<TodoBox />);
        expect(wrapper.find('TodoDialog')).to.have.length(1);
    });
});