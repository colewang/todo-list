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
        this.handleTickItem = this.handleTickItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
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

    removedDataById(target, id) {
        this.state[target] = this.state[target].filter(itemInCompleted => {return itemInCompleted.id !== id})
    }

    findItemById(id) {
        let returnValue = this.state.completedItem.filter(itemInCompleted => {return itemInCompleted.id === id});
        return returnValue.length ? returnValue : this.state.activeItem.filter(itemInActive => {return itemInActive.id === id});
    }

    handleAddItem(itemValue) {
        if (itemValue !== '') {
            this.insertData('activeItem', {id: uuidv4(), value: itemValue, checked: false});
            this.setState(this.state);
        }
    }

    handleTickItem(event) {
        this.changeItemStatus(this.findItemById(event.target.id)[0]);
        this.setState(this.state);
    }

    changeItemStatus(item) {
        if(item.checked) {
            this.handleTickCompletedItem(item);
        } else {
            this.handleTickActiveItem(item);
        }
        item.checked = !item.checked;
    }

    handleTickActiveItem(item) {
        this.removedDataById('activeItem', item.id);
        this.insertData('completedItem', item);
    }

    handleTickCompletedItem(item) {
        this.removedDataById('completedItem', item.id);
        this.insertData('activeItem', item);
    }

    handleDeleteItem(event) {
        this.removedDataById('completedItem', event.target.name);
        this.removedDataById('activeItem', event.target.name);
        this.setState(this.state);
    }

    render() {
        return (
            <Row>
                <Divider>Todo List</Divider>
                <Col xs={{span: 18, offset: 3}} sm={{span: 14, offset: 5}} md={{span: 10, offset: 7}}
                     lg={{span: 6, offset: 9}}>
                    <TodoDialog handleAddItem={this.handleAddItem}/>
                    <Tabs type="card" tabPosition='bottom' tabBarGutter='20'>
                        <TabPane tab="All" key="1">
                            <TodoList itemData={this.state.activeItem.concat(this.state.completedItem)}
                                      handleTickItem={this.handleTickItem}
                                      handleDeleteItem={this.handleDeleteItem}/>
                        </TabPane>
                        <TabPane tab="Active" key="2">
                            <TodoList itemData={this.state.activeItem}
                                      handleTickItem={this.handleTickItem}
                                      handleDeleteItem={this.handleDeleteItem}/>
                        </TabPane>
                        <TabPane tab="Completed" key="3">
                            <TodoList itemData={this.state.completedItem}
                                      handleTickItem={this.handleTickItem}
                                      handleDeleteItem={this.handleDeleteItem}/>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        )
    }
}

export default TodoBox;