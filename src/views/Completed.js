import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { getCompletedTodos, deleteCompletedTodos } from '../api/data/todoData';

export default function Completed() {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    getCompletedTodos().then(setCompletedTodos);
  }, []);

  const handleClick = (key) => {
    deleteCompletedTodos(key).then(setCompletedTodos);
  };

  return (
    <div>
      {completedTodos.map((completedTodo) => (
        <div
          key={completedTodo.firebaseKey}
          className="d-flex justify-content-between alert alert-light"
          role="alert"
        >
          <h5>{completedTodo.name}</h5>
          <button
            onClick={() => handleClick(completedTodo.firebaseKey)}
            className="btn btn-danger"
            type="button"
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}
