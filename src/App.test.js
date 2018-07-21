import React from 'react';
import App from './App';
import {shallow} from "enzyme";
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('should render <App />', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('TodoBox')).to.have.length(1);
    });
});
