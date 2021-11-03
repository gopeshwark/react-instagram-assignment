import React, { useContext, useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { UserContext } from "../../context/UserContext";
import { db, firebase } from "../../firebase";
import CommentSection from "./CommentSection";
import PostHeader from "./PostHeader";
import PostResponseSection from "./PostResponseSection";

const Post = ({ postId, username, likes, caption, imageUrl, timestamp }) => {
  const currentUser = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    // const unsubscribe = ();
    if (postId) {
      // const unsubscribe = db
      db.collection("posts")
        .doc(postId)
        .collection("comments")
        // .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setComments(snapshot.docs.map((doc) => doc.data()))
        );
      // .get()
      // .then((querySnapshot) => {
      //   setComments(
      //     querySnapshot.docs.map((doc) => ({
      //       comment: doc.data(),
      //     }))
      //   );
      // });
    }

    // return () => {
    //   unsubscribe();
    // };
  }, [postId]);

  // console.log(postId);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: currentUser.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setComment("");
  };
  return (
    <article className="post">
      <div className="post__main">
        <PostHeader
          sectionRight1={
            <BsFillPersonFill className="post__headerLeftAvatar" />
          }
          sectionRight2={<p className="post__headerLeftText">{username}</p>}
          sectionLeft={
            <svg
              aria-label="More Options"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6.5" cy="12" r="1.5"></circle>
              <circle cx="17.5" cy="12" r="1.5"></circle>
            </svg>
          }
        />
        <img className="post__image" src={imageUrl} alt="Landscape" />
        <PostResponseSection />
        <div className="post__likes">
          <p>{likes ? `<span>${likes} </span>likes` : ""}</p>
        </div>
        <CommentSection username={username} comment={caption} visible={false} />
        {comments.map((comment) => (
          <CommentSection username={comment.username} comment={comment.text} />
        ))}
        {/* <CommentSection
          username="Second user"
          comment="Wow...nice to see this...."
        /> */}

        <div className="post__time">
          <p>
            {" "}
            <button type="button" className="btn__plain"></button> {timestamp}
          </p>
        </div>

        <form className="post__form" onSubmit={postComment}>
          <PostHeader
            sectionRight1={
              <svg
                aria-label="Emoji"
                class="post__headerLeftAvatar"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
              </svg>
            }
            sectionRight2={
              <input
                type="text"
                className="post__formInput"
                placeholder="Add a comment...."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            }
            sectionLeft={
              <button
                className="post__formButton"
                disabled={!comment}
                type="submit"
                // style={!comment && { opacity: 0.5 }}
              >
                Post
              </button>
            }
          />
        </form>
      </div>
    </article>
  );
};

export default Post;
