import React from "react";
import cardCSS from "./card.module.css";
import { Nft } from "./Nft.js";
import { InfoNft } from "./InfoNft";
import { PriceNtime } from "./PriceNtime";
import { BorderBottom } from "./BorderBottom";
import { Creator } from "./Creator";

export const Card = () => {
  return (
    <div className={cardCSS.card}>
      <Nft />
      <InfoNft />
      <PriceNtime />
      <BorderBottom />
      <Creator />
    </div>
  );
};
