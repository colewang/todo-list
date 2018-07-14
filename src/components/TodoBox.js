import React from 'react';
import {Row, Col} from 'antd';
import TodoDialog from "./TodoDialog";
import TodoList from "./TodoList";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData: [
                'hello world',
                'second item'
            ]
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6} offset={9}>
                        <TodoDialog/>
                        <TodoList itemData={this.state.itemData}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TodoBox;