import { IoIosAdd } from "react-icons/io";
import Popup from "reactjs-popup";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./index.css";

const BoardAddCardButton = (props) => {
  const [taskObject, changeTaskObject] = useState({
    taskTitle: "",
    deadline: "",
  });

  const buttonId = props.buttonId;

  const dispatch = useDispatch();

  const onchangeTaskTitle = (event) => {
    changeTaskObject((prevState) => ({
      ...prevState,
      taskTitle: event.target.value,
    }));
  };

  const onchangeDeadline = (event) => {
    changeTaskObject((prevState) => ({
      ...prevState,
      deadline: event.target.value,
    }));
  };

  const onSubmitTask = (event) => {
    event.preventDefault();
    if ((taskObject.taskTitle !== "") & (taskObject.deadline !== "")) {
      dispatch({ type: "ADDTASK", taskObject: { ...taskObject, buttonId } });
      changeTaskObject({
        taskTitle: "",
        deadline: "",
      });
    }
  };

  return (
    <Popup
      modal
      trigger={
        <button className="add-card-button">
          <IoIosAdd className="plus-icon" />
          Add another card
        </button>
      }
    >
      {(close) => (
        <div className="add-task-conatiner">
          <form className="add-task-form" onSubmit={onSubmitTask}>
            <label htmlFor="taskInput" className="task-input-label">
              Task Title
            </label>
            <input
              type="text"
              id="taskInput"
              value={taskObject.taskTitle}
              className="task-input"
              onChange={onchangeTaskTitle}
            />
            <label htmlFor="deadLineInput" className="task-input-label">
              DeadLine Date
            </label>
            <input
              type="date"
              id="deadLineInput"
              value={taskObject.deadline}
              className="task-input"
              onChange={onchangeDeadline}
            />
            <button type="submit" className="add-task-submit">
              Add Card
            </button>
          </form>
          <button
            type="button"
            className="add-board-submit close"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
      )}
    </Popup>
  );
};

export default BoardAddCardButton;
