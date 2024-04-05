import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  boardData: [
    {
      boardId: uuidv4(),
      boardTitle: "Things to do",
      tasks: [
        {
          taskId: uuidv4(),
          taskTitle: "Learn HTML",
          deadLine: "2023-04-15",
        },
      ],
    },
    {
      boardId: uuidv4(),
      boardTitle: "Doing",
      tasks: [
        {
          taskId: uuidv4(),
          taskTitle: "Learn CSS",
          deadLine: "2023-04-20",
        },
      ],
    },
    {
      boardId: uuidv4(),
      boardTitle: "Done",
      tasks: [
        {
          taskId: uuidv4(),
          taskTitle: "Learn JS",
          deadLine: "2023-04-25",
        },
      ],
    },
  ],
};

function rootReducer(state = initialState, action) {
  // Handle actions and return the updated state
  switch (action.type) {
    case "ADDBOARD":
      return {
        boardData: [
          ...state.boardData,
          {
            boardId: uuidv4(),
            boardTitle: action.boardTitle,
            tasks: [],
          },
        ],
      };
    case "ADDTASK":
      const updatedBoards = state.boardData.map((eachBoard) => {
        if (eachBoard.boardId === action.taskObject.buttonId) {
          return {
            boardId: eachBoard.boardId,
            boardTitle: eachBoard.boardTitle,
            tasks: [
              ...eachBoard.tasks,
              {
                taskId: uuidv4(),
                taskTitle: action.taskObject.taskTitle,
                deadLine: action.taskObject.deadline,
              },
            ],
          };
        }
        return eachBoard;
      });
      return {
        boardData: updatedBoards,
      };
    case "ARRANGETASK":
      const { source, destination } = action.resultObject;

      // Find the source and destination boards
      const sourceBoardIndex = state.boardData.findIndex(
        (board) => board.boardId === source.droppableId
      );
      const destinationBoardIndex = state.boardData.findIndex(
        (board) => board.boardId === destination.droppableId
      );

      // Check if source or destination board is invalid
      if (sourceBoardIndex === -1 || destinationBoardIndex === -1) {
        // Invalid source or destination board
        return state;
      }

      // Create copies of source and destination boards
      const updatedBoardData = [...state.boardData];
      const sourceBoard = { ...updatedBoardData[sourceBoardIndex] };
      const destinationBoard = { ...updatedBoardData[destinationBoardIndex] };

      // Remove the task from the source board if it exists
      const taskToMove = sourceBoard.tasks.splice(source.index, 1)[0];

      // Insert the task into the destination board at the specified index
      destinationBoard.tasks.splice(destination.index, 0, taskToMove);

      // Update the state with the modified board data
      updatedBoardData[sourceBoardIndex] = sourceBoard;
      updatedBoardData[destinationBoardIndex] = destinationBoard;

      return {
        ...state,
        boardData: updatedBoardData,
      };

    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
