import Board from "../Board/index";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";


import "./index.css";

const Main = () => {
  const boardData = useSelector((state) => state.boardData);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination } = result;

    if (!destination) {
      return;
    }

    dispatch({ type: "ARRANGETASK", resultObject: result });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="main-container">
        <ul className="board-background">
          {boardData.map((eachBoard) => (
            <Board key={eachBoard.boardId} boardDetails={eachBoard} />
          ))}
        </ul>
      </main>
    </DragDropContext>
  );
};

export default Main;
