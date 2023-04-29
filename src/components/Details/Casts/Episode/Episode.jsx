import React from "react";
import "./style.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsPlayCircle } from "react-icons/bs";
export default function Episode({ data }) {
  console.log(data, "veido daat");
  return (
    <>
      <div className="VideoSection">
        <h3>Official Videos</h3>
        <br />
        <br />
        <div className="video">
          {data?.map((res) => {
            return (
              <>
                <div>
                  <LazyLoadImage
                    src={`https://img.youtube.com/vi/${res.key}/mqdefault.jpg`}
                  />
                  <BsPlayCircle className="play" />
                <div className="name">{res.name}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
