import React from "react";
import Wrapper from "../../wrapper/Wrapper";
import "./style.scss";
import LazyLoad from "../../Image/LazyLoad";
import { useSelector } from "react-redux";
export default function Cast({ data }) {
  const { url } = useSelector((state) => state.Home);
  console.log(data?.slice(0, 5), "Credit");
  return (
    <Wrapper>
      <div className="CastHead">
        <h3>Top Casts</h3>
        <br />
        <br />
        <div className="CastImg">
        {data?.slice(0, 20).map((res) => (
          <>
          
            <div><LazyLoad src={url + res.profile_path} />
            <div className="name">{res.name}</div></div>
          </>
        ))}
        </div>
      </div>
    </Wrapper>
  );
}
