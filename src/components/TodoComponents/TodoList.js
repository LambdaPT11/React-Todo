// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {

    return (
        <div className="todo-list">
            {props.list.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-item" onClick={props.clearCompleted}>
                Clear Item(s)
            </button>
        </div>
    );
};

export default TodoList;