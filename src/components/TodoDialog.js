import React from "react";
import {Input} from 'antd';
const Search = Input.Search;

class TodoDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Search
                placeholder="what do you want to do?"
                enterButton="Add"
                size="large"
                onSearch={value => console.log(value)}
            />
        )
    }
}

export default TodoDialog;