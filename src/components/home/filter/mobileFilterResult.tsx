import React from 'react'

type Props = {}

const MobileFilterResult: React.FC<Props> = () => {
  return (
    <div className="mobile-filter-result">
      <select>
        <option>All</option>
        <option>Video</option>
        <option>Channel</option>
        <option>Playoptionst</option>
        <option>Movie</option>
      </select>
      <select>
        <option>Any time</option>
        <option>Last hour</option>
        <option>Today</option>
        <option>This week</option>
        <option>This month</option>
        <option>This year</option>
        <option>Last</option>
      </select>
    </div>
  )
}

export default MobileFilterResult
