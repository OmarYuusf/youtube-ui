import { useState } from 'react'
import FilterResultHidden from './filterResultHidden'
import { BsFilter } from 'react-icons/bs'

interface Props {
  pageInfo: { totalResults: number }
}

const FilterResult: React.FC<Props> = ({ pageInfo }) => {
  const [filterIsHidden, setFilterIsHidden] = useState(false)

  function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <div className="header-of-result">
      <div
        className="result-body"
        style={filterIsHidden ? { border: '0px' } : {}}
      >
        <p>About {numberWithCommas(pageInfo.totalResults)} filterd results</p>
        <div
          onClick={() => {
            setFilterIsHidden((prev) => !prev)
          }}
          style={{ color: filterIsHidden ? '#277BC0' : '#777' }}
        >
          <BsFilter size={21} />
          <p>FILTER</p>
        </div>
      </div>
      <FilterResultHidden filterIsHidden={filterIsHidden} />
    </div>
  )
}

export default FilterResult
