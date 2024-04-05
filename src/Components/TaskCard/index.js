import { IoTimeOutline } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { Draggable } from "react-beautiful-dnd";

import "./index.css";

const colors = ["a", "b", "c", "d","e", "f" ]

const TaskCard = (props) => {
  const taskDetails = props.taskDetails;

  let borderClass = colors[props.index % 6]

  return (
    <Draggable draggableId={taskDetails.taskId} index={props.index}>
      {(provided) => (
        <li
          className={`task-card-container ${borderClass}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p className="task-title">{taskDetails.taskTitle}</p>
          <div className="deadline-and-team-conatiner">
            <div className="deadline">
              <IoTimeOutline className="clock" />
              <p className="deadline-date">{taskDetails.deadLine}</p>
            </div>
            <div className="team-conatiner">
              <p className="team-count">1</p>
              <GoPaperclip className="clip" />
              <div className="circle-overlaping">50X50</div>
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default TaskCard;
