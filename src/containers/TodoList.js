import React from 'react';
import App from './App.js';

class TodoList extends React.Component {

    get data() {
        return this.state.props.map(element => <Element key={element.id} element={element}/>);
      }

    render() {
        return (
            <div>
                
                {this.data}
            </div>
        );
    }
}

export default TodoList;





