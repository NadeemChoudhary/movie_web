import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FetchApiHook from '../../../hooks/FetchApi';
import { useSelector } from 'react-redux';
import LazyLoad from '../../Image/LazyLoad';
import Wrapper from '../../wrapper/Wrapper';
import './Baner.scss'
function Banner() {
    const [BackGround, setBackGround] = useState("");
    const { url } = useSelector(state => state.Home)
    const { Data, Loading } = FetchApiHook("movie/popular");
    console.log(Data, "Popular")
    const [Query, setQuery] = useState(null)
    const navigate = useNavigate();
    const SearchResult = (e) => {
        if (e.key === "Enter" && Query.length > 0) {
            console.log('first')
            navigate(`/search/${Query}`)
        }
    }
    useEffect(() => {
        const bg = url + Data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackGround(bg)
    }, [Data])
    console.log(BackGround, 'bg')

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
                        Millions of movies, TV shows and people to discover. 
                        Explore now.   
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={SearchResult}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </Wrapper>
        </div>

          

        </>
    )
}

export default Banner