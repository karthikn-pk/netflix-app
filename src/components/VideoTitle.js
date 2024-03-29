import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h4 className="py-6 text-lg w-1/4">{overview}</h4>
      <div>
        <button className="bg-gray-500  text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          <FaPlay />
          <span>Play</span>
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          more info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
