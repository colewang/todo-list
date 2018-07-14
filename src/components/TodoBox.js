import React from 'react';
import {Row, Col} from 'antd';
import TodoDialog from "./TodoDialog";
import TodoList from "./TodoList";
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allItem: [
                'active one',
                'completedItem one'
            ],
            activeItem: [
                'active one'
            ],
            completedItem: [
                'completedItem one'
            ]
        }
    }

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6} offset={9}>
                        <TodoDialog/>
                        <Tabs onChange={this.callback} type="card" tabPosition='bottom' tabBarGutter='20'>
                            <TabPane tab="All" key="1">
                                <TodoList itemData={this.state.allItem}/>
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
            </div>
        )
    }
}

export default TodoBox;