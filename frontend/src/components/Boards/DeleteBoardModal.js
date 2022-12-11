import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import * as boardsActions from "../../store/board";

function DeleteBoardModal(props) {
  const { boardId, userId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  let setShowDeleteBoardModal = props.setShowDeleteBoardModal;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(boardsActions.deleteBoard(boardId));
    setShowDeleteBoardModal(false);
    history.replace(`/users/${userId}`);
  };

  return (
    <Modal onClose={() => setShowDeleteBoardModal(false)}>
      <h1>Are you sure?</h1>
      <h2> Once you delete a board and all its Pins, you can't undo it!</h2>
      <div className="deleteboardbuttons">
        <button onClick={() => setShowDeleteBoardModal(false)}>Cancel</button>
        <button onClick={handleDelete}> Delete forever</button>
      </div>
    </Modal>
  );
}

export default DeleteBoardModal;
