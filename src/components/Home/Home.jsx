import React, { useState } from "react";
import Banner from "./Banner/Banner";
import Trending from "./Trending/trending";
import Tab from "../TabChange/Tab";
import Wrapper from "../wrapper/Wrapper";
import FetchApiHook from "../../hooks/FetchApi";
import Carosal from "./Carausal/Carosal";

function Home() {
  const [endPoint, setendPoint] = useState("day");
  const { Data } = FetchApiHook(`/trending/all/${endPoint}`);
  // console.log(Data?.results)
  const ChangeTab = (tab) => {
    setendPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <>
      <Banner />
      <Wrapper>
        <div className="flex">
          <Trending />
          <Tab TabInput={["Day", "Week"]} TabChange={ChangeTab} />
        </div>
        <Carosal data={Data?.results} />
      </Wrapper>
      {/* <div style={{heigh  t : '1000px'}}></div> */}
    </>
  );
}

export default Home;
