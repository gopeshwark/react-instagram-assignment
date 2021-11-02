import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../firebase";
import Post from "../../posts/Post";
import HomeRightSection from "./HomeRightSection";
import { UserContext } from "../../../context/UserContext";
import Loader from "../../loader/Loader";
import { useLocation } from "react-router";

const Home = () => {
  const currentUser = useContext(UserContext);
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    db.collection("posts")
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });

    db.collection("users")
      .get()
      .then((querySnapshot) => {
        setUsers(
          querySnapshot.docs.map((doc) => ({
            user: doc.data(),
          }))
        );
      });
  }, [currentUser]);

  console.log(location);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="home">
        <div className="home__left">
          {posts?.map(({ id, post }) => {
            return (
              <Post
                key={id}
                postId={id}
                username={post.username}
                likes={post.likes}
                caption={post.caption}
                imageUrl={post.imageUrl}
                timestamp="time"
              />
            );
          })}
        </div>
        <div className="home__right">
          <HomeRightSection
            users={users}
            user={currentUser?.displayName}
            displayName={currentUser?.displayName}
          />
        </div>
      </div>
    );
  }
};

export default Home;
