import { useState } from "react";
import Form from "react-bootstrap/Form";
import ActionButton from "./ActionButton"; // Assuming you have this button component
import "./App.css";

function App() {
  // Initial task data
  const initialTasks = [
    { title: "Create a react Project", time: "5:23 AM", date: "12/11/2024" },
    { title: "Learn React", time: "5:22 AM", date: "12/11/2024" },
    { title: "Create a Todo App", time: "5:21 AM", date: "12/11/2024" },
  ];

  // Set tasks in state
  const [tasks, setTasks] = useState(initialTasks);

  // Delete handler
  const handleDelete = (index) => {
    // Filter out the task at the given index
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks); // Update the state with the new task list
  };

  return (
    <>
      {/* Task 1 Start Here */}
      <div className="todo-list-container">
        <h1>TO DO LIST</h1>
        <div className="todo-form">
          <div className="todo-actions">
            <ActionButton variant="primary" action="Add Task" />
            <Form.Select aria-label="Default select example">
              <option>All</option>
              <option value="1">List1</option>
              <option value="2">List2</option>
              <option value="3">List3</option>
            </Form.Select>
          </div>
          <ul className="todo-list">
            {tasks.map((task, index) => (
              <li key={index}>
                <div className="form-check">
                  <Form.Check type="checkbox" id={`checkbox-${index}`} />
                  <div className="form-date">
                    <p>{task.title}</p>
                    <p>
                      <span>{task.time}</span>
                      <span>{task.date}</span>
                    </p>
                  </div>
                </div>
                <div className="list-action">
                  <ActionButton action="Delete" />
                  <ActionButton action="Edit" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Task 1 End Here */}
    </>
  );
}

export default App;
