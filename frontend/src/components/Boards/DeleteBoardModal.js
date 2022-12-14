import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import * as boardsActions from "../../store/board";
import  "./DeleteBoardModal.css"

function DeleteBoardModal(props) {
  const { boardId, userId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  let setShowDeleteBoardModal = props.setShowDeleteBoardModal;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(boardsActions.deleteBoard(boardId));
    setShowDeleteBoardModal(false);
    history.replace(`/${userId}`);
  };

  return (
    <Modal onClose={() => setShowDeleteBoardModal(false)}>
      <div id="deleteboardModal">
      <h1>Are you sure?</h1>
      <p> Once you delete a board and all its Pins, you can't undo it!</p>
      <div className="deleteboardbuttons">
        <button onClick={() => setShowDeleteBoardModal(false)}>Cancel</button>
        <button onClick={handleDelete}> Delete forever</button>
      </div>
      </div>
    </Modal>
  );
}

export default DeleteBoardModal;
