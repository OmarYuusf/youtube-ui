import React from 'react'
import moment from 'moment'

type Props = {
  items: any
}

const VideosResult: React.FC<Props> = ({ items }) => {
  const handleDisc = (description: string): string => {
    return `${description.slice(0, 120)}${
      description.length > 120 ? '...' : null
    }`
  }

  const OneResultVideo = ({ item, isChannel }: any) => {
    const {
      thumbnails: { medium },
    } = item.snippet
    return (
      <div className={`one-result ${isChannel ? 'channel' : ''}`}>
        <div className="one-result-img">
          <div>
            <img
              alt={item.snippet.title}
              src={medium.url}
              loading="lazy"
              width={medium.width}
              height={medium.height}
            />
          </div>
        </div>
        <div className="one-result-body">
          <h4 className="title-video">{item.snippet.title}</h4>
          <div className="details-video">
            <small>{item.snippet.channelTitle}</small>
            <small>{moment(item.snippet.publishTime).fromNow()}</small>
          </div>
          {item.snippet.description ? (
            <p className="disc-video">{handleDisc(item.snippet.description)}</p>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className="container-videos-result">
      <div className="result">
        {items.map((item: any) => {
          return (
            <OneResultVideo
              item={item}
              key={item.etag}
              isChannel={item.id.kind === 'youtube#video' ? false : true}
            />
          )
        })}
      </div>
    </div>
  )
}

export default VideosResult
