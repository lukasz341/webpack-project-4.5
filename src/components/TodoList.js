import React from 'react';

class TodoList extends React.Component {
    get data() {
        return this.props.data.map(element => <li onClick={() => this.props.removeTodo(element.id)} key={element.id}>{element.text}</li>);
    }
     
    render() {
        return (
            <ul>
                {this.data}
            </ul>
        );
    }
}

export default TodoList;





