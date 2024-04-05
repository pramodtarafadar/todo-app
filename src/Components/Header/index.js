import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdHome, IoMdNotifications } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Popup from "reactjs-popup";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./index.css";

const Header = () => {
  const [boardTitle, changeBoardTitle] = useState("");

  const dispatch = useDispatch();

  const onchangeBoardTitle = (event) => {
    const value = event.target.value;
    changeBoardTitle(value);
  };

  const addBoard = (event) => {
    event.preventDefault();
    if (boardTitle !== "") {
      dispatch({ type: "ADDBOARD", boardTitle: boardTitle });
      changeBoardTitle("");
    }
  };

  return (
    <header className="header-container">
      <div className="header-left-content">
        <BsThreeDotsVertical className="header-menu" />
        <div className="home-background">
          <IoMdHome className="home" />
        </div>
        <FaStar className="star" />
        <h1 className="company-name">Thriving Technologies</h1>
      </div>
      <div className="header-right-content">
        <div className="notification-background">
          <IoMdNotifications className="notification" />
        </div>
        <div className="header-circle-overlaping">50X50</div>
        <Popup
          modal
          trigger={
            <button className="create-board-button">Create New Board</button>
          }
        >
          {(close) => (
            <div className="add-board-conatiner">
              <form className="add-board-form" onSubmit={addBoard}>
                <label htmlFor="boardInput" className="board-input-label">
                  Board Title
                </label>
                <input
                  type="text"
                  id="boardInput"
                  className="board-input"
                  onChange={onchangeBoardTitle}
                  value={boardTitle}
                />
                <button type="submit" className="add-board-submit">
                  Add Board
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
      </div>
    </header>
  );
};

export default Header;
