import React from "react";
import {Checkbox} from 'antd';

class TodoItem extends React.Component {
    render() {
        return (
            <Checkbox id={this.props.item.id} onChange={this.props.handleTickItem} checked={this.props.item.checked}>{this.props.item.value}</Checkbox>
        )
    }
}

export default TodoItem;