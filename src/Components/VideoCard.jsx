import React from 'react'

export const VideoCard = ({video}) => {
    const {_id,title,views,chips,thumbnail,src,category,creator}=video;


  return (
    <div
      className="flex p-3 m-2 flex-col cursor-pointer w-60 "
    >
      <img src={thumbnail} className="h-40 w-52 " />
      <div className="text-left text-lg font-medium flex flex-wrap ">{title}</div>
      <div className="text-left text-lg font-medium">{category}</div>
      <div className="text-left text-xs font-normal">{views} | {creator}</div>
    </div>
  )
}
