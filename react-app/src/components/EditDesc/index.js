import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateImageThunk, getImagesThunk } from "../../store/post";
import "./EditDesc.css";
// import { useParams } from "react-router-dom";

function EditDesc({ image }) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateImageThunk(image.id, description));
  };

  useEffect(() => {
    dispatch(getImagesThunk());
  });

  return (
    <div>
      <form onSubmit={onSubmit} className="edit-desc-div">
        <label className="edit-desc"></label>
        <label>
          <textarea
            placeholder="Edit Caption"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="2"
            cols="20"
            className="edit-desc-input"
          />
        </label>
        <button className="edit-btn descpost-btn" type="submit">
          Post!
        </button>
      </form>
    </div>
  );
}

export default EditDesc;
