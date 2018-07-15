import React from "react";
import {Input} from 'antd';
const Search = Input.Search;

class TodoDialog extends React.Component {

    render() {
        return (
            <Search
                placeholder="what do you want to do?"
                enterButton="Add"
                size="large"
                onSearch={this.props.handleAddAction}
            />
        )
    }
}

export default TodoDialog;