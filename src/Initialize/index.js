import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Routes from '../routes';
import { getTodos } from '../api/data/todoData';
// import Todo from '../components/Todos';
import TodoForm from '../components/TodoForm';
import Navigation from '../components/Navigation';

const Container = styled.div`
  width: 60%;
  margin: auto;
  padding: 50px 0;
  h1 {
    color: white;
    text-align: center;
    font-size: 64px;
    font-weight: 400;
  }
  h3 {
    color: lightgrey;
    text-align: center;
  }
`;

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos(false).then(setTodos);
  }, []);

  return (
    <Container>
      <Navigation />
      <h1>YOU-DO</h1>
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
    </Container>
  );
}

export default Initialize;
