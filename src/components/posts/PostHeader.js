import React from "react";

const PostHeader = ({ sectionRight1, sectionRight2, sectionLeft }) => {
  return (
    <div className="post__header">
      <div className="post__headerLeft">
        {sectionRight1}
        {sectionRight2}
      </div>
      <div className="post__headerRight">
        <button className="post__headerRightButton">{sectionLeft}</button>
      </div>
    </div>
  );
};

export default PostHeader;
