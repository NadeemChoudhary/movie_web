import React from "react";
import "./style.scss";
import LazyLoad from "../../Image/LazyLoad";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FetchData } from "../../../Api/api";
import FetchApiHook from "../../../hooks/FetchApi";
import Wrapper from "../../wrapper/Wrapper";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Rating from "../../Home/CircularRating/Rating";
import { BsPlayCircle } from "react-icons/bs";
import Cast from "../Casts/Cast";
import Episode from "../Casts/Episode/Episode";
import Trending from "../../Home/Trending/trending";
import TopRated from "../../Home/TopRated/TOpRated";
import Recommend from "../../Home/Recommend/Recommend";
import Similar from "../../Home/SImilarMOvie/Similar";
export default function DetailBanner({ Casts, video, crew }) {
  console.log(Casts , "Casts")
  const { url } = useSelector((state) => state.Home);
  const { type, id } = useParams();
  const { Data } = FetchApiHook(`/${type}/${id}`);
  const Director = crew?.filter((f) => f.job === "Director");
  const Writer = crew?.filter(
    (f) => f.job === "Svreenplay" || f.job === "Story" || f.job === "Writer"
  );
  // console.log(Director, "okkk");
  // console.log(Data, `/${type}/${id}`, "SingleDAta");
  return (
    <>
      {!!Data && (
        <React.Fragment>
          <div className="Backdrop">
            <LazyLoad src={url + Data.backdrop_path} />
          </div>
          <Wrapper>
            <div className="Details">
              <div className="Left">
                <LazyLoad src={url + Data.backdrop_path} />
              </div>
              <div className="Right">
                <div className="title">{Data.original_title || Data.name}</div>
                <div className="Subtitle">{Data.tagline}</div>
                <div className="genre">
                  {Data?.genres?.map((res) => (
                    <div className="tag">{res.name}</div>
                  ))}
                </div>
                <div className="circular">
                  <Rating rating={Data?.vote_average?.toFixed(1)} />
                  <BsPlayCircle className="play" />
                  Watch Trailer
                </div>
                <p>Overview :-</p>
                <div className="overView">{Data.overview}</div>
                <div className="Sub_detail">
                  <div className="status">
                    Status : <span>{Data.status}</span>
                  </div>
                  <div className="date">
                    Release Date :<span> {Data.release_date}</span>
                  </div>
                  <div className="status">
                    RunTime : <span>{Data.runtime}</span>
                  </div>
                </div>
                <div className="director">
                  Director :{" "}
                  {Director?.map((res) => (
                    <span>{res.name}</span>
                  ))}
                </div>
                <div className="director">
                  Writer :{" "}
                  {Writer?.slice(0, 4).map((res) => (
                    <span>{res.name}</span>
                  ))}
                </div>
                {/* <hr /> */}
              </div>
            </div>
              <Cast data={Casts}/>
              <Episode data={video}/>
              <Similar />
              <br />
              <br />
              <br />
              <br />
              <br />
          <Recommend />
          </Wrapper>
        </React.Fragment>
      )}
    </>
  );
}
