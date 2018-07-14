import React from "react";
import {Checkbox} from 'antd';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {
        return (
            <Checkbox onChange={this.onChange}>{this.props.value}</Checkbox>
        )
    }
}

export default TodoItem;