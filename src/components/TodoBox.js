import React from 'react';
import {Row, Col} from 'antd';
import TodoDialog from "./TodoDialog";
import TodoList from "./TodoList";
import {Tabs, Divider} from 'antd';

const TabPane = Tabs.TabPane;

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getData();
        this.handleAddAction = this.handleAddAction.bind(this);
    }

    getData() {
        return {
            activeItem: [
                {value: 'active one', checked: false}
            ],
            completedItem: [
                {value: 'completedItem one', checked: true}
            ]
        }
    }

    handleAddAction(itemValue) {
        if (itemValue !== '') {
            let state = this.state;
            state.activeItem.push({value: itemValue, checked: false});
            this.setState(state);
        }
    }

    render() {
        return (
            <Row>
                <Divider>Todo List</Divider>
                <Col xs={{span: 18, offset: 3}} sm={{span: 14, offset: 5}} md={{span: 10, offset: 7}} lg={{span: 6, offset: 9}}>
                    <TodoDialog handleAddAction={this.handleAddAction}/>
                    <Tabs type="card" tabPosition='bottom' tabBarGutter='20'>
                        <TabPane tab="All" key="1">
                            <TodoList itemData={this.state.activeItem.concat(this.state.completedItem)}/>
                        </TabPane>
                        <TabPane tab="Active" key="2">
                            <TodoList itemData={this.state.activeItem}/>
                        </TabPane>
                        <TabPane tab="Completed" key="3">
                            <TodoList itemData={this.state.completedItem}/>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        )
    }
}

export default TodoBox;