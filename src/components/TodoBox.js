import React from 'react';
import {Row, Col} from 'antd';
import TodoDialog from "./TodoDialog";
import TodoList from "./TodoList";
import {Tabs, Divider} from 'antd';
import uuidv4 from 'uuid/v4';

const TabPane = Tabs.TabPane;

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initData();
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    initData() {
        return {
            activeItem: [
                {id: uuidv4(), value: 'active one', checked: false}
            ],
            completedItem: [
                {id: uuidv4(), value: 'completedItem one', checked: true}
            ]
        }
    }

    insertData(target, value) {
        this.state[target].push(value);
    }

    handleAddItem(itemValue) {
        if (itemValue !== '') {
            this.insertData('activeItem', {id: uuidv4(), value: itemValue, checked: false})
            this.setState(this.state);
        }
    }

    handleTickItem(event) {
        console.log(event);

    }

    render() {
        return (
            <Row>
                <Divider>Todo List</Divider>
                <Col xs={{span: 18, offset: 3}} sm={{span: 14, offset: 5}} md={{span: 10, offset: 7}} lg={{span: 6, offset: 9}}>
                    <TodoDialog handleAddItem={this.handleAddItem}/>
                    <Tabs type="card" tabPosition='bottom' tabBarGutter='20'>
                        <TabPane tab="All" key="1">
                            <TodoList itemData={this.state.activeItem.concat(this.state.completedItem)} handleTickItem={this.handleTickItem}/>
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