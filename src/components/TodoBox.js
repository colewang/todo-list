import React from 'react';
import {Row, Col} from 'antd';
import TodoDialog from "./TodoDialog";
import TodoList from "./TodoList";
import {Tabs, Divider, Button} from 'antd';
import uuidv4 from 'uuid/v4';

const TabPane = Tabs.TabPane;

const Active = 'active';
const Completed = 'completed';

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initData();
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleTickItem = this.handleTickItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleClearCompletedItem = this.handleClearCompletedItem.bind(this);
    }

    initData() {
        return {
            item: [
                {id: uuidv4(), value: 'active one', checked: false, status: Active},
                {id: uuidv4(), value: 'completedItem one', checked: true, status: Completed}
            ]
        }
    }

    insertItem(value) {
        this.state.item.push(value);
    }

    removedItemById(id) {
        this.state.item = this.state.item.filter(item => item.id !== id)
    }

    findItemById(id) {
        return this.state.item.filter(item => item.id === id);
    }

    handleAddItem(itemValue) {
        if (itemValue !== '') {
            this.insertItem({id: uuidv4(), value: itemValue, checked: false, status: Active});
            this.setState(this.state);
        }
    }

    handleTickItem(event) {
        this.changeItemStatus(this.findItemById(event.target.id)[0]);
        this.setState(this.state);
    }

    changeItemStatus(item) {
        if(item.checked) {
            item.status = Active;
        } else {
            item.status = Completed;
        }
        item.checked = !item.checked;
    }

    handleDeleteItem(event) {
        this.removedItemById(event.target.name);
        this.setState(this.state);
    }

    handleClearCompletedItem() {
        this.state.item = this.state.item.filter(item => item.status !== Completed);
        this.setState(this.state);
    }

    render() {
        return (
            <Row>
                <Divider>Todo List</Divider>
                <Col xs={{span: 18, offset: 3}} sm={{span: 14, offset: 5}} md={{span: 10, offset: 7}}
                     lg={{span: 6, offset: 9}}>
                    <TodoDialog handleAddItem={this.handleAddItem}/>
                    <Tabs type="card" tabPosition='top' tabBarGutter='20'>
                        <TabPane tab="All" key="1">
                            <TodoList itemData={this.state.item}
                                      handleTickItem={this.handleTickItem}
                                      handleDeleteItem={this.handleDeleteItem}/>
                        </TabPane>
                        <TabPane tab="Active" key="2">
                            <TodoList itemData={this.state.item}
                                      handleTickItem={this.handleTickItem}
                                      handleDeleteItem={this.handleDeleteItem}
                                      itemStatus={Active}
                            />
                        </TabPane>
                        <TabPane tab="Completed" key="3">
                            <TodoList itemData={this.state.item}
                                      handleTickItem={this.handleTickItem}
                                      handleDeleteItem={this.handleDeleteItem}
                                      itemStatus={Completed}
                            />
                        </TabPane>
                    </Tabs>
                    <Button onClick={this.handleClearCompletedItem}>clear completed item(s)</Button>
                </Col>
            </Row>
        )
    }
}

export default TodoBox;