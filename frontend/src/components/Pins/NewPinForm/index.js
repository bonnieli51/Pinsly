import React, { useState } from "react";
import "./NewPinForm.css";

function NewPinForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Tell everyone what your Pin is about"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </form>
    </>
  );
}

export default NewPinForm;
