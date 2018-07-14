import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.value;
    }
}

export default TodoItem;