import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateImageThunk, getImagesThunk } from "../../store/post";
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

    })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className="upload-img-txt">Edit Your Post</label>
        <label>
          <textarea
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="3"
            cols="20"
          />
        </label>
        <button className="upload-btn" type="submit">
          Post!
        </button>
      </form>
    </div>
  );
}

export default EditDesc;
