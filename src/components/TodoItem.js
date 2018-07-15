import React from "react";
import {Row, Col, Button, Checkbox} from 'antd';

class TodoItem extends React.Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <Row type="flex" justify="space-between" align="bottom">
                    <Col>
                        <Checkbox id={this.props.item.id} checked={this.props.item.checked}
                                  onChange={this.props.handleTickItem}>
                            {this.props.item.value}
                        </Checkbox>
                    </Col>
                    <Col>
                        <Button name={this.props.item.id} size="small" type="danger" icon="close" onClick={this.props.handleDeleteItem}></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TodoItem;