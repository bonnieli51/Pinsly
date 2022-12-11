import React, { useState, useEffect } from "react";
import DeleteBoardModal from "./DeleteBoardModal";

function DropDownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);

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
      {showDeleteBoardModal && (
        <DeleteBoardModal setShowDeleteBoardModal={setShowDeleteBoardModal} />
      )}
      <button onClick={openMenu}>
        <i class="fa-solid fa-ellipsis"></i>
      </button>

      {showMenu && (
        <div id="create-menu">
          <div>Edit</div>
          <div id="create-button" onClick={() => setShowDeleteBoardModal(true)}>
            Delete Board
          </div>
        </div>
      )}
    </>
  );
}

export default DropDownMenu;
