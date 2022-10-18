import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import View from "./View";
import Add from "./Add";

function App() {
  // app will track a list of all the todos
  const [todos, changeTodos] = useState([
    { id: 1, task: "make static data", complete: false },
    { id: 2, task: "make dynamic data", complete: false },
    { id: 3, task: "remove duplicate data", complete: true },
  ]);
  // through props, pass a function to add, to add props to the list
  // through props, pass the list os posts to view
  return (
    <Container>
      <View todos={todos} />
      <Add changeTodos={changeTodos} />
    </Container>
  );
}
export default App;
