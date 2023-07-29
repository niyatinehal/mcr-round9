import React from "react";
import { useCategory } from "../Context/CategoryContext";
import { VideoCard } from "../Components/VideoCard";
import { videos } from "../db/vedio";
import { ImCross } from "react-icons/im";

export const Explore = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const filteredVideo = videos.filter(
    (video) => video.category === selectedCategory
  );
  return (
    <div className="h-full">
      <div className="flex justify-between items-center ">
        <h1 className="text-left font-semibold text-2xl py-2">Explore</h1>
        <div
          className="pr-24 text-red-600 cursor-pointer"
          onClick={() => setSelectedCategory("")}
        >
          <ImCross />
        </div>
      </div>

      {selectedCategory ? (
        <div className="flex flex-wrap overflow-auto h-[45rem] ">
          {filteredVideo.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap overflow-auto h-[45rem] ">
          {videos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      )}
    </div>
  );
};
