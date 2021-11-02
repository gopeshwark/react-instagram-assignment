import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { db, storage, firebase } from "../../../firebase";

const CreatePost = () => {
  const currentUser = useContext(UserContext);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function.....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress);
      },
      (error) => {
        // Error function...
        alert(error.message);
      },
      () => {
        // complete function...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post image inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: currentUser.displayName,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="newPost">
      <h2>Create a new post</h2>
      <progress className="newPost__progress" value={progress} max="100" />
      <input
        type="text"
        className="newPost__caption"
        placeholder="Enter a caption....."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <label class="newPost__file">
        <input
          type="file"
          id="file"
          onChange={handleChange}
          aria-label="File browser"
        />
        <span class="newPost__fileCustom"></span>
      </label>
      <button className="newPost__btn" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default CreatePost;
