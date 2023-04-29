import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Rating.scss";
export default function Rating({ rating }) {
  return (
    <>
      <div className="circleRating">
        <CircularProgressbar
          value={rating}
          maxValue={10}
          text={rating}
          styles={buildStyles({
            pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          })}
        />
        
      </div>
    </>
  );
}
