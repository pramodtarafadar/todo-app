import BoardTitle from "../BoardTitle/index";
import TaskCard from "../TaskCard/index";
import BoardAddCardButton from "../BoardAddCardButton/index";
import { Droppable } from "react-beautiful-dnd";

import "./index.css";

const Board = (props) => {
  const boardDetails = props.boardDetails;
  const tasks = boardDetails.tasks;

  return (
    <li className="board-container">
      <BoardTitle boardTitle={boardDetails.boardTitle} />
      <Droppable droppableId={boardDetails.boardId}>
        {(provided) => (
          <ul
            {...provided.droppableProps}
            className="board-task-container"
            ref={provided.innerRef}
          >
            {tasks.map((eachTask, index) => (
              <TaskCard taskDetails={eachTask} key={eachTask.taskId} index={index}/>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <BoardAddCardButton
        key={boardDetails.boardId}
        buttonId={boardDetails.boardId}
      />
    </li>
  );
};

export default Board;
