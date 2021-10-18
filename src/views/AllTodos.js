import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { getAllTodos } from '../api/data/todoData';

export default function AllTodos() {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(setAllTodos);
  }, []);

  return (
    <div>
      {allTodos.map((everyTodo) => (
        <div
          key={everyTodo.firebaseKey}
          className="d-flex justify-content-between alert alert-light"
          role="alert"
        >
          <h5>{everyTodo.name}</h5>
        </div>
      ))}
    </div>
  );
}
