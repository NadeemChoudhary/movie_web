import React from "react";
import DetailBanner from "./DetailBanner/DetailBanner";
import FetchApiHook from "../../hooks/FetchApi";
import { useParams } from "react-router-dom";
import Cast from "./Casts/Cast";

export default function Detail() {
  const { type, id } = useParams();
  const { Data: Vedios } = FetchApiHook(`/${type}/${id}/videos`);
  const { Data: Credit } = FetchApiHook(`/${type}/${id}/credits`);
  console.log(Credit, "Credit Data");
  return (
    <>
      <DetailBanner video={Vedios?.results  } Casts={Credit?.cast} crew={Credit?.crew}/> 
     
    </>
  );
}
