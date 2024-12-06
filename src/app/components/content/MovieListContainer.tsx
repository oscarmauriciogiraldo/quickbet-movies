'use client'
import MovieCard from "@/components/card/MovieCard";
import { Movie } from "@/interface/types";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  title?: string;
  movies: Movie[];
  isVerticalOrientation?: boolean;
};

const MovieListContainer = ({ title, movies }: Props) => {
  /* Setings carousel */
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col justify-start aling-center w-[100%] px-3 py-2 relative mt-5">
      <div className="py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        {/* <Link
                    href={{ pathname: "/viewmore", query: { title: title } }}
                    className="bg-gray-800 text-xs text-white uppercase px-2 py-1 rounded-md border-indigo-600 font-semibold hover:bg-black duration-300"
                >
                    view more
                </Link> */}
        {/* <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" /> */}
      </div>
      <Carousel responsive={responsive}>
        {movies.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </Carousel>
      
    </div>
  );
};

export default MovieListContainer;
