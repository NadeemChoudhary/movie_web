import React, { useState } from 'react'
import logo from '../../Assets/movix-logo.png';
import './Header.scss'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import Wrapper from '../wrapper/Wrapper';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const [Query, setQuery] = useState(null);
  const [Show, setShow] = useState(false)
  const SearchResult = (e) => {
    if (e.key === "Enter" && Query.length > 0) {
      console.log('first')
      navigate(`/search/${Query}`)
      setTimeout(() => setShow(false), 2000)
    }
  };

  const navigateTo = (type) => {
    if (type === "movie") {
      navigate("/explore/movie")
    } else {
      navigate("/explore/shows")

    }
  }
  return (
    // movix-logo
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/" ><img src={logo} /></Link>

          </div>
          <ul>
            <li onClick={() => navigateTo("movie")}>Movies</li>
            <li onClick={() => navigateTo("shows")}>TV Show</li>
            <li><BiSearchAlt2 onClick={() => setShow(!Show)} /></li>
          </ul>
        </div>
      </div>
      <div className={`Search ${Show ? "ShowInput" : "HideInput"}`}>
        {
          // Show &&
          <>
            <input

              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={SearchResult}
            /><RxCross2 className='cross' onClick={() => setShow(false)} />
          </>
        }
      </div>
    </>
  )
}

export default Header