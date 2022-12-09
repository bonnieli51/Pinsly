import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as boardsActions from "../../store/board";

function NewBoardForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
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
    <form id="newboard-form" onSubmit={handleSubmit}>
      <h1>Create Board</h1>
      <label>
        Name
        <input
          type="text"
          placeholder='Like "Places to Go" or "Recipes to Make"'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <ul>
        {errors.map((error) => {
          if (error.includes("board")) return <li key={error}>{error}</li>;
        })}
      </ul>
      <label>
        Description
        <input
          type="textarea"
          placeholder="What's your board about?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button>Create</button>
    </form>
  );
}

export default NewBoardForm;
