import React from 'react';
import MyButton from './UI/button/MyButton';

const TodoItem = (props) => {
    return (
        <div className='todo-wrapper'>
            <div className={`todo-item${props.todo.completed?` line-through`:''}`}>
                <p>{props.todo.title}</p>
            </div>
            <div className='todo-btns'>
                <input
                 type="checkbox" 
                 checked={props.todo.completed}
                 onChange={(e)=>props.toggleCompleted(props.todo.id)}
                 style={{marginRight:'15px'}}
                 />
                <MyButton onClick={()=>props.remove(props.todo)}
                style={{background:"red",color:'white',border:'red 1px solid'}}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default TodoItem;