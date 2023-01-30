import React from "react";
import ETH from "../images/icon-ethereum.svg";
import Clock from "../images/icon-clock.svg";
import priceNtimeCSS from "./priceNtime.module.css";

export const PriceNtime = () => {
  return (
    <div className={priceNtimeCSS.flex}>
      <div className={priceNtimeCSS.textCenter}>
        <img src={ETH} alt="etherium" />
        <span className={priceNtimeCSS.eth}>0.041 ETH</span>
      </div>

      <div className={priceNtimeCSS.textCenter}>
        <img src={Clock} alt="clock icon" />
        <span className={priceNtimeCSS.time}>3 days left</span>
      </div>
    </div>
  );
};
