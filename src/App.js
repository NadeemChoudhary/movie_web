import { useEffect, useState } from "react";
import "./App.css";
import { FetchData } from "./Api/api";
import { useDispatch, useSelector } from "react-redux";
import { AppCounter } from "./Store/App/AppAction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/notFound/NotFound";
import Search from "./components/Search/Search";
import Detail from "./components/Details/Detail";
import Explore from "./components/explore/Explore";
import { BannerActions } from "./Store/Home/HomeAction";
import Header from "./components/HeadFoot/Header";
import Form from "./components/form/Form";
import Footer from "./components/HeadFoot/Footer";
import FetchApiHook from "./hooks/FetchApi";

function App() {
  const { App } = useSelector((state) => state);
  const dispatch = useDispatch();
  const Fetch = async () => {
    const { images } = await FetchData("/configuration");
    const url = images?.secure_base_url + "original";
    dispatch(BannerActions(url, "banner"));
  };
  // const { Data } = FetchApiHook("/trending/movie/day");
  // console.log(Data, "checkData");
  useEffect(() => {
    Fetch();
  }, [0]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/explore/:type" element={<Explore />} />
          <Route path="/:type/:id" element={<Detail />} />
          <Route exact path="/search/:query" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
