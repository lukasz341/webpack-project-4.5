import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
    get data() {
        return this.props.data.map(element => <li onClick={() => this.props.removeTodo(element.id)} key={element.id}> {element.text} </li>);
      }
     
    render() {
        return (
            <div>
                <ol>                         
                {this.data}  
                </ol>     
            </div>
        );
    }
}

export default TodoList;





