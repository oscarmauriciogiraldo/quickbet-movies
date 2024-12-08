import MovieListContainer from "@/app/components/content/MovieListContainer";
import { getImagePath } from "@/lib/getImagePath";
import {
  getMovieDetails,
  getMovieVideos,
  getRecomendationMovies,
} from "@/lib/getMovies";
import { Button, CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

export const metadata = {
  title: "Movie Detail",
  description: "Movie Details",
};

interface Props {
  params: {
    id: string;
  };
}

const MovieDetails = async ({ params: { id } }: Props) => {
  const movies = await getMovieVideos(id);
  const videos = movies.map((movie: any) => ({
    id: movie.id,
    iso_639_1: movie.iso_639_1,
    iso_3166_1: movie.iso_3166_1,
    key: movie.key,
    name: movie.name,
    official: movie.offcial,
    published_at: movie.published_at,
    site: movie.site,
    size: movie.size,
    type: movie.type,
  }));
  const details: any = await getMovieDetails(id);

  const recomendationsMovies = await getRecomendationMovies(id);

  return (
    <div>
      <div className="banner flex w-full h-[560px] justify-center lg:container lg:mx-auto relative">
        <div className="bannerDetail">
            <div className="flex-full h-[560px] min-w-0 relative">
                <Image
                    src={getImagePath(details?.backdrop_path)}
                    alt={details?.title}
                    width={1920}
                    height={436}
                />
                {/* absolute */}
                <div
                  className="
                    lg:flex
                    lg:flex-row
                    items-center
                    h-[100%] 
                    w-full 
                    text-white 
                    absolute 
                    z-40
                    top-0
                    bg-trasparent bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-900 dark:to-[#121212]
                  "
                >
                  <div className="cardTrailer flex justify-center items-center w-[25%]">
                      <div className="contCardDetail">
                          <div className="imageCardDetail hover:scale-105 transition duration-200 ease-out cursor-pointer">
                          <Image
                              className="w-[100%] h-[100%] absolute object-cover"
                              src={getImagePath(details?.poster_path)}
                              alt={details?.title}
                              width={1920}
                              height={1080}
                          ></Image>
                          </div>
                          <Button
                          fullWidth
                          endContent={<CiPlay1 />}
                          className="bg-[#F0B90B] rounded"
                          >
                          official Trailer
                          </Button>
                      </div>
                  </div>
                  <div className="textMovieDetail flex flex-col w-[75%] h-[70%] justify-start items-start gap-5">
                      <div className="title flex flex-col w-[100%] justify-start ">
                          <h1 className="text-[35px] font-bold text-left">
                          {details?.original_title}
                          </h1>
                          <div className="date">
                          <p className="text-sm">{details?.release_date}</p>
                          </div>
                      </div>

                      <div className="description flex flex-col justify-start w-[80%] gap-5">
                        <h2 className="text-[24px] font-bold">Overview:</h2>
                        <p>{details?.overview}</p>
                        <div className="flex flex-row w-[100%] justify-between items-center">
                          <div className="flex flex-row w-[30%] justify-start gap-3">
                          <CircularProgress
                              size="lg"
                              value={details?.vote_average}
                              color="success"
                              showValueLabel={true}
                          />
                          <p className="text-[16px] font-bold">
                              Users <br /> Score
                          </p>
                          </div>
                          <FaRegHeart />
                        </div>
                        <div className="flex w-[100%] justify-around items-center flex-wrap gap-3">
                          {/* TODO: con variable */}
                          {details.genres?.map((genre) => (
                            <Button key={genre?.id} variant="bordered" color="warning" className="rounded">
                              {genre?.name}
                            </Button>
                          ))}
                          
                        </div>

                      </div>
                  </div>
                </div>
            </div>
          
        </div>
      </div>

      <main className="flex items-center sm:items-start lg:container lg:mx-auto">
        <div className="bg-[--cardContianer-backround] flex flex-col w-[100%] px-11">
          <MovieListContainer
            movies={recomendationsMovies}
            title="Recomendaions"
          />
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
