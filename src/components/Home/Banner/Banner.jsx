import React, { useEffect, useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import FetchApiHook from "../../../hooks/FetchApi";
import { useSelector } from "react-redux";
import LazyLoad from "../../Image/LazyLoad";
import Wrapper from "../../wrapper/Wrapper";
import "./Baner.scss";
import { StoreData } from "../../../Store/ZustandStore";
function Banner() {
  const navigate = useNavigate();
  const passwordHintId = useId();
  const [BackGround, setBackGround] = useState("");
  const { url } = useSelector((state) => state.Home);
  const { Data, Loading } = FetchApiHook("movie/popular");
  const [Query, setQuery] = useState(null);
  const SearchResult = (e) => {
    StoreData.setState({ DataZ: "ok" });
    if (e.key === "Enter" && Query.length > 0) {
      navigate(`/search/${Query}`);
    }
  };

  useEffect(() => {
    const bg =
      url + Data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [Data]);

  return (
    <>
      <div className="heroBanner">
        {!Loading && (
          <div className="backdrop-img">
            <LazyLoad src={BackGround} />
          </div>
        )}
        <div className="opacity-layer"></div>

        <Wrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                aria-describedby={passwordHintId}
                type="text"
                placeholder="Search for a movie or tv shows...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={SearchResult}
              />

              <button>Search</button>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Banner;
