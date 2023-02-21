const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

class Task extends React.Component{
    constructor(props) {
        super(props);
        this.newText = React.createRef();
        this.state = {
            isEdit: false,
        }
    }
    handleClickSave = () => {
        this.setState({isEdit: false});
        const value = this.newText.current.value;
        this.props.updateTask(this.props.index, value);
    }

    handleClickEdit = () => {
        this.setState({isEdit: true})
    }

    handleClickRemove = () => {
        this.props.deleteTask(this.props.index);
    }
    renderNorm = () => {
        return (
        <div className={'box'}>
            <div>{this.props.children}</div>
            <button className={'btn light'} onClick={this.handleClickEdit}>Edit</button>
            <button className={'btn red'} onClick={this.handleClickRemove}>Remove</button>
        </div>
    )};

    renderEdit = () => {
        return (
        <div className={'box'}>
           <textarea defaultValue={this.props.children} ref={this.newText}></textarea>
            <button className={'btn red'} onClick={this.handleClickSave}>Save</button>
        </div>
    )
    }
    render() {
        if(this.state.isEdit)
            return this.renderEdit();
        else return this.renderNorm();
            // <div className={'box'}>
            //     <div>{this.props.children}</div>
            //     <button className={'btn light'} onClick={this.handleClickEdit}>Edit</button>
            //     <button className={'btn red'} onClick={this.remove}>Remove</button>
            // </div>
    }
}

class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {tasks: []}
    }

    handleAddTaskClick = () => {
        let tempArr = [...this.state.tasks];
        tempArr.push('New Task');
        this.setState({tasks: tempArr});
    }

    taskRemove = (index) => {
        const tempArr = [...this.state.tasks];
        tempArr.splice(index, 1);
        this.setState({tasks: tempArr});
    }
    taskEdit = (index, text) => {
        const tempArr = [...this.state.tasks];
        tempArr[index] = text;
        this.setState({tasks: tempArr});
    }
    render(){
        return (
            <div className={'field'}>
                <button className={'btn red'} onClick={this.handleAddTaskClick}>Add Task</button>
                <br/>
                {this.state.tasks.map((item, index) =>
                    (<Task key={index} index={index} updateTask={this.taskEdit}
                           deleteTask={this.taskRemove} >{item}</Task>))
                }
                {/*<Task>Task1</Task>*/}
                {/*<Task>Task2</Task>*/}
                {/*<Task>Task3</Task>*/}
                {/*<Task>Task4</Task>*/}
            </div>
        )
    }
}
root.render(<TaskList/>)