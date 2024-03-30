import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const BackgroundVideo = () => {
  const dispatch = useDispatch();
  const trailerVid = useSelector((store) => store.movies?.trailerVideo?.key);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1011985/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filteredTrailer = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/d2OONzqh2jk?si=" + trailerVid}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  );
};

export default BackgroundVideo;
