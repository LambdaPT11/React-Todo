import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        };
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            newItem: e.target.value
        });
    };

    handelSubmit = e => {
        e.preventDefault();
        console.log("is this thing on?");
        // add our typed in item to the list!
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: '' });
    };

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input 
                type="text"
                name="item"
                value={this.state.newItem}
                onChange={this.handleChanges}
                />
                <button className="add-task-btn">Add Task</button>
            </form>
        );
    }
}

export default TodoForm