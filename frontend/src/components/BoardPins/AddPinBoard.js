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
  console.log(errors);
  useEffect(() => {
    dispatch(boardsActions.fetchBoards(currentUser.id));
  }, [pinId, dispatch, currentUser.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pin_id = pinId;
    const board_id = boardId;
    return dispatch(
      boardPinsActions.createBoardPin({ pin_id, board_id })
    ).catch(async (res) => {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select
          // value="boardId"
          value={boardId}
          onChange={(e) => setBoardId(e.target.value) >>> setErrors([])}
        >
          <option value="" selected>
            All Boards
          </option>
          {boards.map((board) => (
            <option value={board.id}>{board.name}</option>
          ))}
        </select>
        <button type="submit" disabled={!boardId}>
          Save
        </button>
      </form>
      <div>{errors[0] && errors[0].slice(5)}</div>
    </>
  );
}
export default AddPinBoard;
