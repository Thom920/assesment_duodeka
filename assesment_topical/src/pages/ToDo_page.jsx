import React from "react";
import AddToDo from "../components/AddToDoForm.jsx";
import ToDoList from "../components/ToDoList.jsx";

function ToDo_page() {
  return (
    <div className="page-content">
      <h1>ToDo</h1>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default ToDo_page;