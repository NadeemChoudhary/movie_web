import React, { useEffect, useState } from "react";
import FetchApiHook from "../../hooks/FetchApi";
import { useNavigate, useParams } from "react-router-dom";
import { FetchData } from "../../Api/api";
import "./Search.scss";
import Wrapper from "../wrapper/Wrapper";
import LazyLoad from "../Image/LazyLoad";
import { useSelector } from "react-redux";
import posterF from "../../Assets/no-poster.png";
export default function Search() {
  const [PageNum, setPageNum] = useState(1);
  const [data, setdata] = useState([]);
  const { query } = useParams();
  const { url } = useSelector((state) => state.Home);
  const navigate = useNavigate();
  const FetchMethod = () => {
    FetchData(`search/multi?query=${query}&page=${PageNum}`).then((res) => {
      console.log(res, "serach");
      setdata(res);
      setPageNum((prev) => prev + 1);
    });
  }; 

  useEffect(() => {
    FetchMethod();
  }, [query]);

  return (
    <>
      <Wrapper>
        <div className="search">Search results of '{query}'</div><br />
        
        <div className="content" 
          
        >
          {data?.results?.map((res) => (
            <div className="image"
            onClick={() => navigate(`/${res?.media_type}/${res.id}`)}
            >
              <LazyLoad
                src={
                  !res?.backdrop_path? posterF : url + res.backdrop_path
                }
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
