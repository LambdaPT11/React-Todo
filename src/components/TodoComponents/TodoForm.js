import React from 'react';
// with class use render but remember render is a 
// function and the return falls inside that block
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: ''
        };
    }
    // input handler on input field
    handleChangeInput = (e) => {
        this.setState({
            [e.target.value]: e.target.value
        });
    }
    // function for form submit
    handleSubmit = (e) => {
        e.preventDefault();
        //set the state of this component to the function in app.js
        this.props.addNewTask( this.state.newTask );
        //reset the text in input
        this.setState({ newTask: '' });
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                    type='text'
                    name='newTask'
                    //set the value of this input to state
                    value={this.state.newTask}
                    placeholder='Todo Task'
                    onChange={this.handleChangeInput}
                    ></input>
                    <button type='submit' >Add</button>
                </div>
            </form>
        )
    }
}

export default Form;