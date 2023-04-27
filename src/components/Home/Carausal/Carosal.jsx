import React from "react";
import "./Carosal.scss";
import { useSelector } from "react-redux";
import NoPoster from "../../../Assets/no-poster.png";
import LazyLoad from "../../Image/LazyLoad";
import Rating from "../CircularRating/Rating";
export default function Carosal({ data }) {
  const { url } = useSelector((state) => state.Home);
  //   console.log(url + data[0].poster_path);
  return (
    <>
      <div className="crausal">
        <div className="cr_item">
          {data?.map((result, i) => {
            const Url = result?.poster_path
              ? `${url}${result?.poster_path}`
              : NoPoster;
            return (
              <>
                <div className="Box" key={i}>
                  <div className="poster">
                    <LazyLoad src={Url} />
                    <Rating rating={result.vote_average.toFixed(1)}/>
                  </div>
                  <div className="title">{result?.name || result?.title.substring(0, 20)}</div>
                  <div className="Date">{new Date(result?.release_date).toDateString() || new Date(result.first_air_date).toDateString()}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
