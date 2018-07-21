import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import TodoList from "./TodoList";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<TodoList />', () => {
    it('should render <TodoList /> components', () => {
        const wrapper = shallow(<TodoList itemData={[
            {id: 'id1', value: 'active one', checked: false, status: 'active'},
            {id: 'id2', value: 'completedItem one', checked: true, status: 'completed'}
        ]}
                                          handleTickItem={undefined}
                                          handleDeleteItem={undefined}
                                          itemStatus={'active'}
        />);
        expect(wrapper.find('List')).to.have.length(1);
    });
});