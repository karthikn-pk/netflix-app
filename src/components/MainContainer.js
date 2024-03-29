import React from "react";
import Header from "./Header";
import VideoTitle from "./VideoTitle";
import BackgroundVideo from "./BackgroundVideo";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!movies) return;

  const movieData = movies[0];
  console.log(movieData);
  const { original_title, overview, id } = movieData;
  return (
    <div>
      <Header />
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo movidId={id} />
    </div>
  );
};

export default MainContainer;
