import React, { useEffect, useState } from "react";
import FetchApiHook from "../../hooks/FetchApi";
import { useNavigate, useParams } from "react-router-dom";
import { FetchData } from "../../Api/api";
import "../Search/Search.scss";
import Wrapper from "../wrapper/Wrapper";
import LazyLoad from "../Image/LazyLoad";
import { useSelector } from "react-redux";
import posterF from "../../Assets/no-poster.png";
import Rating from "../Home/CircularRating/Rating";
export default function TvShows() {
  const [PageNum, setPageNum] = useState(1);
  const [data, setdata] = useState([]);
  const { type } = useParams();
  const { url } = useSelector((state) => state.Home);
  const navigate = useNavigate();

  const { Data } = FetchApiHook("/tv/popular");
  console.log(Data, "moveiDAta");

  return (
    <>
      <Wrapper>
        <br />

        <div className="content">
          {Data?.results?.map((res) => (
           <>
           
           <div className="image" style={{marginTop : '5rem'}}
            // onClick={() => navigate(`/${res?.media_type}/${res.id}`)}
            >
              <LazyLoad
                src={
                  !res?.backdrop_path? posterF : url + res.backdrop_path
                }
              />
               <Rating rating={res.vote_average.toFixed(1)} />
               <div className="title">
                    {res?.name || res?.title.substring(0, 20)}
                  </div>
            </div></>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
