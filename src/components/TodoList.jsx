import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos,remove,toggleCompleted}) => {

    if(!todos.length){
        return(
            <h1 style={{textAlign:'center'}}>Задач нету</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Список задач</h1>
            {todos.map(todo=>
                <TodoItem todo={todo} key={todo.id} remove={remove} toggleCompleted={toggleCompleted}/>
            )}
        </div>
    );
};

export default TodoList;