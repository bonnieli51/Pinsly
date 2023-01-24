import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as boardPinsActions from "../../store/boardpin";
import * as boardsActions from "../../store/board";
import "./BoardPins.css";

function AddPinBoard({ pinId, currentUser }) {
  const dispatch = useDispatch();
  const boards = useSelector((state) => Object.values(state.boards));
  const [boardId, setBoardId] = useState("");
  const [errors, setErrors] = useState([]);
  const message = useSelector((state) =>
    state.boardpins.message ? state.boardpins.message : ""
  );

  const [saved, setSaved] = useState("");
  const pin_id = pinId;

  useEffect(() => {
    dispatch(boardsActions.fetchBoards(currentUser.id));
  }, [pinId, dispatch, currentUser.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const board_id = boardId;
    dispatch(boardPinsActions.createBoardPin({ pin_id, board_id })).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  const handleChange = () => {
    const board_id = boardId;
    setErrors([]);
    setSaved("");
    // dispatch(boardPinsActions.checkBoardPin(board_id, pin_id));
  };

  return (
    <>
      <form className="add-pin-form" onSubmit={handleSubmit}>
        <select
          value={boardId}
          className="save-pin-select"
          onChange={(e) => setBoardId(e.target.value) >> handleChange()}
        >
          <option value="" selected>
            All Boards
          </option>
          {boards.map((board) => (
            <option value={board.id}>{board.name}</option>
          ))}
        </select>
        <button className="save-pin-submit" type="submit" disabled={!boardId}>
          Save
        </button>
      </form>
      <div className="save-pin-errors">{errors[0] && errors[0].slice(5)}</div>
      <div className="save-pin-saved">{saved && saved}</div>
    </>
  );
}
export default AddPinBoard;
