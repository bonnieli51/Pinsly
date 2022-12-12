import React, { useState, useEffect } from "react";
import DeleteBoardModal from "./DeleteBoardModal";
import EditBoardModal from "./EditBoard/EditBoardModal";

function DropDownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const [showEditBoardModal, setShowEditBoardModal] = useState(false);

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

      {showEditBoardModal && (
        <EditBoardModal setShowEditBoardModal={setShowEditBoardModal} />
      )}
      <button id="board-show-pg-drop-button" onClick={openMenu}>
        <i class="fa-solid fa-ellipsis"></i>
      </button>

      {showMenu && (
        <div id="board-options">
          <div id="board-options-smallfont"> Board Options</div>
          <div className="board-options-button" onClick={() => setShowEditBoardModal(true)}>
            Edit Board
          </div>
          <div className="board-options-button" onClick={() => setShowDeleteBoardModal(true)}>
            Delete Board
            {/* <div className="EditModal-smallfonts">
              Delete this board and all its Pins forever.
            </div>
            <div className="EditModal-smallfonts">You can't undo this!</div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default DropDownMenu;
