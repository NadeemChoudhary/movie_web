import React, { useRef } from "react";
import "./Carosal.scss";
import { useSelector } from "react-redux";
import NoPoster from "../../../Assets/no-poster.png";
import LazyLoad from "../../Image/LazyLoad";
import Rating from "../CircularRating/Rating";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function Carosal({ data }) {
  const { url } = useSelector((state) => state.Home);
  const Carausal = useRef();
  const navigate = useNavigate();

  const Move = (dir) => {
    const container = Carausal.current;
    const scrollAmount =
      dir === "left"
        ? container.offsetWidth - container.scrollLeft
        : container.offsetWidth + container.scrollLeft;
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="crausal">
        <BsArrowLeftCircleFill className="left" onClick={() => Move("left")} />
        <div className="cr_item" ref={Carausal}>
          {data?.map((result, i) => {
            const Url = result?.poster_path
              ? `${url}${result?.poster_path}`
              : NoPoster;
            return (
              <>
                <div className="Box" key={i}>
                  <div className="poster">
                    <LazyLoad src={Url} />
                    <Rating rating={result.vote_average.toFixed(1)} />
                  </div>
                  <div className="title">
                    {result?.name || result?.title.substring(0, 20)}
                  </div>
                  <div className="Date">
                    {new Date(result?.release_date).toDateString() ||
                      new Date(result.first_air_date).toDateString()}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <BsArrowRightCircleFill
          className="right"
          onClick={() => Move("right")}
        />
      </div>
    </>
  );
}
