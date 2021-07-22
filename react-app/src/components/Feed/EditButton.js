import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import EditDesc from "../EditDesc";
// import { useHistory } from "react-router";

function EditButton({ image }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // useEffect(() => {
  //   dispatch(uploadActions.getPostThunk(id));
  // }, [dispatch, id]);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    if (!showMenu) return;
    setShowMenu(false);
  };

  const openEdit = () => {
    if (showEdit) return;
    setShowEdit(true);
  };
  const closeEdit = () => {
    if (!showEdit) return;
    setShowEdit(false);
  };

  // const deletePost = (id) => {
  //   dispatch(deleteImageThunk(id));
  //   history.push("/");
  // };
  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  useEffect(() => {
    if (!showEdit) return;

    const closeEdit = () => {
      setShowEdit(false);
    };

    return () => document.removeEventListener("click", closeEdit);
  }, [showEdit]);

  return (
    <div className="edit-menu">
      <button
        className="edit-btn"
        id="elipses"
        onClick={showMenu === true ? closeMenu : openMenu}
      >
        elipses
      </button>
      {showMenu && (
        <div className="edit-dropdown">
          {/* <button onClick={() => deletePost(id)} className="delete-btn"> */}
          {/* Delete */}
          {/* </button> */}
          <button
            onClick={showEdit === true ? closeEdit : openEdit}
            className="delete-btn"
            id="edit-btn"
          >
            Edit
          </button>
          {showEdit && <EditDesc image={image} />}
        </div>
      )}
    </div>
  );
}

export default EditButton;
