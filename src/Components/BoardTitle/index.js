import { BsThreeDotsVertical } from "react-icons/bs";

import './index.css'

const BoardTitle = (props) => {
  const boardTitle = props.boardTitle
  return(
  <div className="board-title-container">
    <p className="board-title">{boardTitle}</p>
    <BsThreeDotsVertical className="header-menu" />
  </div>
)};

export default BoardTitle