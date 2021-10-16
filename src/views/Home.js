import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todos';

export default function Home({ todos, setTodos, setEditItem }) {
  return (
    <div>
      <div className="mt-5">
        {todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo.firebaseKey}
              todo={todo}
              setTodos={setTodos}
              setEditItem={setEditItem}
            />
          ))
        ) : (
          <h3>Add A You Do!</h3>
        )}
      </div>
    </div>
  );
}

Home.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
