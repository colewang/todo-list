import React from "react";
import {Checkbox} from 'antd';

class TodoItem extends React.Component {
    render() {
        return (
            <Checkbox id={this.props.item.id} checked={this.props.item.checked} onChange={this.props.handleTickItem}>{this.props.item.value}</Checkbox>
        )
    }
}

export default TodoItem;