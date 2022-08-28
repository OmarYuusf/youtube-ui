import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../app/store'
import { fetchYoutubeVideos } from '../../features/search/searchSlice'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

const mobileLogo = require('./../../assets/youtube-logo-png-white-png-image-469239.png')

const Mobile = () => {
  const [searchBox, setSearchBox] = useState<string>('')
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const [isSearching, setIsSearching] = useState(false)

  const submitSearch = () => {
    if (!searchBox || searchBox === '') return
    dispatch(fetchYoutubeVideos(searchBox))
  }

  return (
    <div className="navbar-mobile">
      <div className="container">
        <div className="mobile-logo">
          <Link to={'/search'} onClick={() => setSearchBox('')}>
            <img src={mobileLogo} alt="youtube logo mobile" draggable={false} />
          </Link>
        </div>
        {isSearching ? (
          <div className="mobile-search-input">
            <div>
              <input
                placeholder="what's on your mind ?"
                type="text"
                value={searchBox}
                onChange={(e) => setSearchBox(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    navigate(`/search?query=${searchBox}`)
                    submitSearch()
                  }
                }}
              />
              <AiOutlineClose
                onClick={() => {
                  setSearchBox('')
                  setIsSearching(false)
                }}
              />
            </div>
          </div>
        ) : null}

        <div className="mobile-search-icon">
          <div
            onClick={() => {
              setIsSearching(true)
            }}
          >
            <AiOutlineSearch size={21} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mobile
