import React from "react";
import TodoItem from "./TodoItem";
import {List} from 'antd';

class TodoList extends React.Component {
    render() {
        const todoList = this.props.itemData.map(listItem => <TodoItem value={listItem.value} checked={listItem.checked}/>)
        return (
            <List
                size="large"
                bordered
                dataSource={todoList}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        )
    }
}

export default TodoList;