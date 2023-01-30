import React from "react";
import nftCSS from "./nft.module.css";
import nftImg from "../images/image-equilibrium.jpg";
import nftView from "../images/icon-view.svg";

export const Nft = () => {
  return (
    <div className={nftCSS.nftDiv}>
      <img src={nftImg} alt="EquilbriumNft" className={nftCSS.nft} />
      <div className={nftCSS.parentDiv}>
        <img src={nftView} alt="ViewIcon" className={nftCSS.view} />
      </div>
    </div>
  );
};
