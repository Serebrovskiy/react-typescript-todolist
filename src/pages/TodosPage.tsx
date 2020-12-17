import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean; // говорим что такая переменная точно будет и обьявлем тип 

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      setTodos(saved)
    }, [])
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
  
    const addHandler = (title: string) => {
      const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false,
      };
      // setTodos([newTodo, ...todos])
      setTodos((prev) => [newTodo, ...prev]);
    };
  
    const toggleHandler = (id: number) => {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
            // todo.completed = !todo.completed    //не работает не хрена
          }
          // console.log(todo);
          return todo;
        })
      );
    };
  
    const removeHandler = (id: number) => {
      const shoutRemove = confirm("Вы уверены, что хотите удалить запись?");
      if (shoutRemove) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }
    };
  

  return (
    // или пустой тег <>
    <React.Fragment> 
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};
