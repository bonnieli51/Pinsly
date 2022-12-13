import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import NewBoardForm from "../Boards/NewBoardModal";
import "./UserShowPage.css"

function CreateButton() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
       
     {showModal && (   
          <NewBoardForm setShowModal={setShowModal}/>
      )}
      <button id="create-button" onClick={openMenu}>
        <i class="fa-solid fa-plus"></i>
      </button>
      {showMenu && (
   
         <div id="create-menu">
          <div id="create-menu-small-font">Create</div>
          <div className="create-menu-buttons" onClick={() => setShowModal(true)}>
           Board
          </div>
        </div>
 
      )}
    </>
  );
}

export default CreateButton;
