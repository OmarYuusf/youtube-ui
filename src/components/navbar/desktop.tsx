import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { AppDispatch } from '../../app/store'
import { fetchYoutubeVideos } from '../../features/search/searchSlice'

const desktopLogo = require('./../../assets/youtube-logo-png-desk.png')

const Desktop = () => {
  const [searchBox, setSearchBox] = useState<string>('')
  const navigate = useNavigate()
  const [isSticky, setSticky] = React.useState(false)
  const ref = useRef<HTMLDivElement>()
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (window && window.innerWidth > 768) {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  const submitSearch = () => {
    if (!searchBox || searchBox === '') return
    dispatch(fetchYoutubeVideos(searchBox))
  }

  return (
    <div
      className={isSticky ? 'navbar-desktop navbar-fixed' : 'navbar-desktop'}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container">
        <div className="desk-logo">
          <Link to={'/search'} onClick={() => setSearchBox('')}>
            <img src={desktopLogo} alt="youtube logo" draggable={false} />
          </Link>
        </div>
        <div className="desk-search-box">
          <div className="search-box">
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
            <button
              onClick={() => {
                navigate(`/search?query=${searchBox}`)
                submitSearch()
              }}
            >
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop
