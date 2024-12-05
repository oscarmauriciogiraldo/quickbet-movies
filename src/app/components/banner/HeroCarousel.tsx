'use client'
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Movie } from '@/interface/types';
import Image from 'next/image';
import React from 'react';
import { getImagePath } from "@/lib/getImagePath";
import { CircularProgress } from "@nextui-org/react";
import { FaRegHeart } from "react-icons/fa"


interface Props {
    movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [AutoPlay()]);

    return (
        <div className='overflow-hidden cursor-pointer relative' ref={emblaRef}>
            <div className="flex">
                {movies.map((movie) =>(
                    <div  key={movie?.id} className="flex-full  min-w-0 relative">
                        <Image
                            src={getImagePath(movie?.backdrop_path, true)}
                            alt={movie?.title}
                            width={1920}
                            height={436}
                        />
                        <div className="
                            hidden 
                            lg:flex
                            lg:flex-row
                            top-0  
                            xl:pt-72 
                            left-0 
                            h-[436px] 
                            w-full 
                            text-white 
                            absolute 
                            z-50 
                            p-10 
                            space-y-5 
                            bg-trasparent bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-900 dark:to-[#121212]">
                            <div className="flex flex-col w-[80%] ">
                                <h2 className="text-[25px] font-bold max-w-xl">{movie?.title}</h2>
                                <p className="max-w-xl text-[15px] font-bold line-clamp-3">{movie?.overview}</p>
                            </div>
                            <div className="flex flex-row w-[20%] justify-around items-center ">
                                <CircularProgress
                                    size="md"
                                    value={movie?.vote_count}
                                    color="success"
                                    showValueLabel={true}
                                />
                                <FaRegHeart />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-900 dark:to-[#121212]" /> */}
        </div>
    );
};

export default HeroCarousel;