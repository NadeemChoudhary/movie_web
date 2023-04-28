import React, { useState } from "react";
import Wrapper from "../../wrapper/Wrapper";
import "../Home.scss";
import FetchApiHook from "../../../hooks/FetchApi";
import Tab from "../../TabChange/Tab";
import Carosal from "../Carausal/Carosal";
export default function WhatsNew() {
  const [endPoint, setendPoint] = useState("movie");
  const { Data } = FetchApiHook(`${endPoint}/popular`);
  const ChangeTab = (tab) => {
    setendPoint(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <Wrapper>
      <div className="flex">
        <div className="Trend">
          <span>What's New</span>
        </div>
        <Tab TabInput={["Movie", "Tv "]} TabChange={ChangeTab} />
      </div>
      <Carosal data={Data?.results} />
    </Wrapper>
  );
}
