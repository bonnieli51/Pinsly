import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import * as boardsActions from "../../../store/board";

function EditBoardModal(props) {
  const { boardId } = useParams();
  const history = useHistory();
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
    const data = { ...board, name, description}
    dispatch(boardsActions.updateBoard(data));
    setShowEditBoardModal(false);
  };

  return (
    <Modal onClose={() => setShowEditBoardModal(false)}>
      <h1>Edit your board</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input 
            type="text"
            value={name}
            placeholder= {name}
            onChange={(e)=> setName(e.target.value)}
          ></input>
        </label>

        <label>
          Description
          <input 
          type="textarea"
          value={description}
          placeholder= {description}
          onChange={(e)=> setDescription(e.target.value)}
          ></input>
        </label>

        <button>Done</button>
      </form>
      {/* <div className="deleteboardbuttons">
        <button onClick={() => setShowEditBoardModal(false)}>Cancel</button>
        <button onClick={handleUpdate}> Delete forever</button>
      </div> */}
    </Modal>
  );
}

export default EditBoardModal;
