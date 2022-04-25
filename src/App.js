import React, { useMemo, useState } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/modal/MyModal";
import './styles/App.css'
function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn Javascript', completed: false },
    { id: 2, title: 'Learn PHP', completed: true }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal,setModal]=useState(false)

  const sortedTodos = useMemo(() => {
    if (filter.sort) {
      return [...todos].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return todos
  }, [filter.sort, todos])

  const sortAndSearchedTodos = useMemo(() => {
    return sortedTodos.filter(todo => todo.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedTodos])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
    setModal(false)
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }

  const toggleCompleted = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="App-box">
        <MyModal visible={modal} setVisible={setModal}>
          <TodoAdd create={createTodo} />
        </MyModal>
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoList todos={sortAndSearchedTodos} remove={removeTodo} toggleCompleted={toggleCompleted} />
        <MyButton style={{marginTop:'15px',border:'1px solid teal'}} onClick={()=>setModal(true)}>
          Добавить задачу
        </MyButton>
      </div>
    </div>
  );
}

export default App;
