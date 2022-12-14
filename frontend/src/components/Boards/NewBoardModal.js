import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as boardsActions from "../../store/board";
import { Modal } from "../../context/Modal";
import { useHistory, useParams } from "react-router-dom";
import "./NewBoardModal.css";

function NewBoardForm(props) {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  let setShowModal = props.setShowModal;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setShowModal(false);
    return dispatch(boardsActions.createBoard({ name, description })).catch(
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

  return (
    <Modal onClose={() => setShowModal(false)}>
      <form id="newboard-form" onSubmit={handleSubmit}>
        <h1>Create board</h1>
        <label>
          Name
          <input
            className="newboardinput"
            type="text"
            placeholder='Like "Places to Go""'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <ul>
          {errors.map((error) => {
            if (error.includes("board"))
              return <li key={error}>{error.split(" ").slice(1).join(" ")}</li>;
          })}
        </ul>
        <label>
          Description
          <input
            className="newboardinput"
            type="textarea"
            placeholder="What's your board about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button id="new-board-create-button">Create</button>
      </form>
    </Modal>
  );
}

export default NewBoardForm;
