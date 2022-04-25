import React from 'react';
import MyInput from './UI/input/MyInput';

const TodoFilter = ({filter,setFilter}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Поиск</h1>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter,query:e.target.value})}
                placeholder="Поиск..." />
        </div>
    );
};

export default TodoFilter;