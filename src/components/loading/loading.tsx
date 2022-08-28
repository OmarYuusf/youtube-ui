import React from 'react'
import { VscLoading } from 'react-icons/vsc'

type Props = {}

const Loading: React.FC<Props> = () => {
  return (
    <div className="container-loading">
      <div>
        <VscLoading className='loading'/>
        <p>loading</p>
      </div>
    </div>
  )
}

export default Loading
