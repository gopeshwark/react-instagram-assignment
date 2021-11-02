import React from "react";
import { Link } from "react-router-dom";
import { PostIconsDataLeft, PostIconsDataRight } from "./PostIconsData";

const PostResponseSection = () => {
  return (
    <div className="post__response">
      <div className="post__responseRight">
        {PostIconsDataRight.map((icon, index) => {
          const { title, icon1, icon2, link } = icon;
          return (
            <Link key={index} to={link ? link : ""}>
              <svg
                aria-label={icon.title}
                class="navbar__nav__pagesBoxIcon"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                {icon.icon1}
              </svg>
            </Link>
          );
        })}
      </div>
      <div className="post__responseLeft">
        {PostIconsDataLeft.map((icon, index) => {
          return (
            <Link key={index} to={icon.link}>
              <svg
                aria-label={icon.title}
                // class="navbar__nav__pagesBoxIcon"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                {icon.icon1}
              </svg>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PostResponseSection;
