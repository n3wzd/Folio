import React from "react";
import "../styles/ProjectSection.css";

const ProjectSection = () => {
  return (
    <div className="project-container">
      <h2>Project: Task Manager</h2>

      <div className="project-demo">
        <img src="/path/to/demo.gif" alt="Task Manager Demo" />
      </div>

      <div className="problem-definition">
        <h3>Problem Definition</h3>
        <p>
          Many users struggle to manage their tasks effectively, leading to missed deadlines and disorganization. I aimed to solve this issue by developing a task manager application where users can create, edit, and track their tasks efficiently.
        </p>
      </div>

      <div className="solution-description">
        <h3>Solution</h3>
        <p>
          I developed a task manager with a user-friendly interface where tasks can be easily created, prioritized, and marked as completed. The application uses local storage to persist data, ensuring that users' tasks are not lost when they refresh the page.
        </p>
      </div>

      <div className="project-result">
        <h3>Result</h3>
        <p>
          The task manager app has improved user productivity by providing a clear view of upcoming tasks and deadlines. It has also reduced the chances of task duplication and forgotten tasks.
        </p>
      </div>

      <div className="explanation-section">
        <h3>Explanation (WHAT, HOW, WHY)</h3>

        <div className="explanation">
          <h4>WHAT: Features Developed</h4>
          <p>
            I implemented a task management feature where users can add tasks with a title, description, and due date. Each task can be marked as completed, and users can delete or update existing tasks. I also added a filter to view tasks based on their completion status.
          </p>
        </div>

        <div className="explanation">
          <h4>HOW: Code Implementation</h4>
          <p>
            The `addTask` function adds a new task to the existing task list and updates the state. It also saves the task data in the browser's local storage for persistence. The `completeTask` function updates a task’s status and persists the change in local storage.
          </p>
        </div>

        <div className="explanation">
          <h4>WHY: Code Selection Reason</h4>
          <p>
            I chose to use local storage to store tasks because it offers a simple solution for small-scale applications where user data doesn’t need to be stored on a server. Local storage is lightweight and easy to implement, making it ideal for this project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
