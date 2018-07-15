import React from "react";
import {Checkbox} from 'antd';

class TodoItem extends React.Component {
    render() {
        let checked = this.props.checked;
        let value = this.props.value;
        return (
            <Checkbox checked={checked}>{value}</Checkbox>
        )
    }
}

export default TodoItem;