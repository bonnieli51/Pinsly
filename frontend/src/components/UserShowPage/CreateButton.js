import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import NewBoardForm from "../Boards/NewBoardForm";

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
        <Modal id="CreateBoardModal" onClose={() => setShowModal(false)}>
          <NewBoardForm />
        </Modal>
      
      )}
      <button onClick={openMenu}>
        <i class="fa-solid fa-plus"></i>
      </button>
      {showMenu && (
   
         <div id="create-menu">
          <div>Create</div>
          <button id="create-button" onClick={() => setShowModal(true)}>
           Board
          </button>
        </div>
 
      )}
    </>
  );
}

export default CreateButton;
