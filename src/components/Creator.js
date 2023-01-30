import React from "react";
import profileImg from "../images/image-avatar.png";
import creatorCSS from "./creator.module.css";

export const Creator = () => {
  return (
    <div className={creatorCSS.flexBox}>
      <img src={profileImg} className={creatorCSS.profileImg} alt="Profile" />
      <p className={creatorCSS.grayTxt}>
        Creation of<span className={creatorCSS.whiteTxt}> Jules Wyvern</span>
      </p>
    </div>
  );
};
