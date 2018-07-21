import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TodoItem from "./TodoItem";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<TodoItem />', () => {
    it('should render <TodoItem /> components', () => {
        const wrapper = shallow(<TodoItem item={{id: 'uuid4test', value: 'testItem', checked: false, status: 'active'}}/>);
        expect(wrapper.find('#uuid4test')).to.have.length(1);
    });
});