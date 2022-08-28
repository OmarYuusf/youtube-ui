import React from 'react'

type Props = {
  filterIsHidden: boolean
}

const FilterResultHidden: React.FC<Props> = ({ filterIsHidden }) => {
  return (
    <div
      className={
        filterIsHidden
          ? 'result-hidden-filter filter-is-shown'
          : 'result-hidden-filter'
      }
    >
      <div>
        <p>UPLOAD DATE</p>
        <ul>
          <li>Last hour</li>
          <li>Today</li>
          <li>This week</li>
          <li>This month</li>
          <li>This year</li>
          <li>Last</li>
        </ul>
      </div>
      <div>
        <p>TYPE</p>
        <ul>
          <li>Video</li>
          <li>Channel</li>
          <li>Playlist</li>
          <li>Movie</li>
        </ul>
      </div>
      <div>
        <p>DURATION</p>
        <ul>
          <li>Under 4 minutes</li>
          <li>4 - 20 minutes</li>
          <li>Over 20 minutes</li>
        </ul>
      </div>
    </div>
  )
}

export default FilterResultHidden
