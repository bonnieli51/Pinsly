import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import * as boardsActions from "../../../store/board";
import "./EditBoardModal.css";

function EditBoardModal(props) {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(({ boards }) =>
    boards[boardId] ? boards[boardId] : {}
  );

  const [name, setName] = useState(board.name);
  const [description, setDescription] = useState(board.description);

  let setShowEditBoardModal = props.setShowEditBoardModal;

  useEffect(() => {
    dispatch(boardsActions.fetchBoard(boardId));
  }, [boardId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...board, name, description };
    dispatch(boardsActions.updateBoard(data));
    setShowEditBoardModal(false);
  };

  return (
    <Modal onClose={() => setShowEditBoardModal(false)}>
      <div id="editboard-form-modal">
        <h1>Edit your board</h1>
        <form id="editboard-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              className="editboardinput"
              type="text"
              value={name}
              placeholder={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>

          <label>
            Description
            <input
              className="editboardinput"
              type="textarea"
              value={description}
              placeholder={
                description ? description : "What's your board about?"
              }
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </label>

          <button>Done</button>
        </form>
      </div>
    </Modal>
  );
}

export default EditBoardModal;
