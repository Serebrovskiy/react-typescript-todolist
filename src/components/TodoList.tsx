import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  //как аналог interface
  todos: ITodo[];
  onToggle(id: number): void; // если хотим сделать это поле необязательным - onToggle?(id: number): void
  onRemove(id: number): void; // еще вариант написания - onRemove: (id: number) => void
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет!</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                //onChange={() => onToggle(todo.id)}
                onChange={onToggle.bind(null, todo.id)} // эта конструкция вернет новую функцию и не будет её вызывать
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
