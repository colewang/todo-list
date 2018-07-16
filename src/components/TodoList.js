import React from "react";
import TodoItem from "./TodoItem";
import {List} from 'antd';

class TodoList extends React.Component {
    render() {
        const todoList = this.props.itemData.filter(itemInList => {
            return !this.props.itemStatus || itemInList.status === this.props.itemStatus
        }).map(itemInList => <TodoItem item={itemInList} handleTickItem={this.props.handleTickItem}
                                       handleDeleteItem={this.props.handleDeleteItem}/>);
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