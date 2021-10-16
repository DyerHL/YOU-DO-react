import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Alert } from 'reactstrap';
import { deleteTodos, updateTodos } from '../api/data/todoData';

const TodoStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  h5 {
    flex-grow: 2;
    margin-left: 20px;
  }
  button {
    color: white;
    &:first-child {
      margin-right: 10px;
    }
  }
`;

export default function Todo({ todo, setTodos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodos(todo.firebaseKey).then(setTodos);
    } else {
      updateTodos({ ...todo, complete: true }).then(setTodos);
    }
  };

  return (
    <TodoStyle className="alert alert-light" role="alert">
      {todo.complete ? (
        <button className="btn btn-success" type="button" disabled>
          <i className="fas fa-check-circle fa-2x" />
        </button>
      ) : (
        <button
          onClick={() => handleClick('complete')}
          className="btn btn-success"
          type="button"
        >
          COMPLETE
        </button>
      )}
      <h5>{todo.name}</h5>
      <div>
        {!todo.complete && (
          <button
            onClick={() => setEditItem(todo)}
            className="btn btn-info"
            type="button"
          >
            EDIT
          </button>
        )}
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
      </div>
    </TodoStyle>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
