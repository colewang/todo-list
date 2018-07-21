import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TodoDialog from "./TodoDialog";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<TodoDialog />', () => {
    it('should render <TodoDialog /> components', () => {
        const wrapper = shallow(<TodoDialog />);
        expect(wrapper.find('Search')).to.have.length(1);
    });
});