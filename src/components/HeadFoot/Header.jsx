import React, { useState } from 'react'
import logo from '../../Assets/movix-logo.png';
import './Header.scss'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import Wrapper from '../wrapper/Wrapper';
function Header() {
  const [Query, setQuery] = useState(null);
  const [Show, setShow] = useState(false)
  const SearchResult = () => {

  }
  return (
    // movix-logo
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} />
          </div>
          <ul>
            <li>
              Movies
            </li>
            <li>TV Show</li>
            <li><BiSearchAlt2 onClick={()=> setShow(!Show)}/></li>
          </ul>
        </div>
      </div>
      <div className="Search">
        {
          Show &&
          <>
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={SearchResult}
            /><RxCross2 className='cross' onClick={()=> setShow(false)}/>
          </>
        }
      </div>
    </>
  )
}

export default Header