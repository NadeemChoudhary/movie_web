import React, { useState } from "react";
import Wrapper from "../../wrapper/Wrapper";
import "../Home.scss";
import FetchApiHook from "../../../hooks/FetchApi";
import Tab from "../../TabChange/Tab";
import Carosal from "../Carausal/Carosal";
export default function Trending() {
  const [endPoint, setendPoint] = useState("day");
  const { Data } = FetchApiHook(`/trending/all/${endPoint}`);
  const ChangeTab = (tab) => {
    setendPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <Wrapper>
      <div className="flex">
        <div className="Trend">
          <span>Trending</span>
        </div>
        <Tab TabInput={["Day", "Week"]} TabChange={ChangeTab} />
      </div>
      <Carosal data={Data?.results} />
    </Wrapper>
  );
}
