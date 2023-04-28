import React, { useState } from "react";
import Banner from "./Banner/Banner";
import Trending from "./Trending/trending";

import Wrapper from "../wrapper/Wrapper";
import FetchApiHook from "../../hooks/FetchApi";
import WhatsNew from "./WhatsNew/WhatsNew";

function Home() {
  return (
    <>
      <Banner />
      <Trending />

      <br />
      <br />
      <br />
      <br />
      <br />
      <WhatsNew />
    </>
  );
}

export default Home;
