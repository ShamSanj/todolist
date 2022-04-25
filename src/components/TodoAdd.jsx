import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const TodoAdd = ({ create }) => {

    const [todo, setTodo] = useState({ title: '' })

    const addNewTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            ...todo, id: Date.now()
        }
        if (todo.title.length > 2) {
            create(newTodo)
            setTodo({ title: '' })
        }
    }

    return (
        <form action="">
            <h1 style={{ textAlign: 'center' }}>Добавить задачу</h1>
            <MyInput
                value={todo.title}
                type="text"
                placeholder='Newtodo'
                style={{border: '1px solid teal'}}
                onChange={e => setTodo({ ...todo, title: e.target.value })}
            />
            <MyButton
                style={{border: '1px solid teal'}}
                onClick={addNewTodo}>Добавить</MyButton>
        </form>
    );
};

export default TodoAdd;