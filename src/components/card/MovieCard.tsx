'use client'
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { getImagePath } from '@/lib/getImagePath';
import {CircularProgress} from "@nextui-org/react";
import { Movie } from '@/interface/types';
import { useRouter } from 'next/navigation';



const MovieCard = ({movie}:{movie:Movie}) => {
    const router = useRouter()
    const handleRoute = () => {
        router.push(`/movie/${movie?.id}`)
    }
    return (
        <div className='contCard'>
            <div onClick={handleRoute}  className='imageCard hover:scale-105 transition duration-200 ease-out cursor-pointer'>
                <Image
                    className='w-[100%] h-[100%] absolute object-cover' 
                    src={getImagePath( movie?.poster_path)}
                    alt={movie?.title}
                    width={1920}
                    height={1080} >
                    
                </Image>
            </div>
            <div className='contetDescriptionCard'>
                <div className="descriptionName flex flex-col justify-center items-start w-[100%] h-[50%] px-2 ">
                    <h3 className='text-sm font-bold'>{movie?.title}</h3>
                    <p className='text-[9px] font-normal'>{movie?.release_date}</p>
                </div>
                <div className="actions flex  justify-around items-center w-[100%] h-[50%] ">
                    <div className="rating flex flex-col justify-center items-center gap-1">
                        <h3 className='text-[9px] font-normal'>Rating</h3>
                        {/* <p className='text-[9px] font-normal'>{movie?.vote_count}%</p> */}
                        <CircularProgress
                            size="sm"
                            value={movie?.vote_count}
                            color="success"
                            showValueLabel={true}
                        />
                    </div>
                    <div className="favorites flex flex-col justify-center items-center gap-1">
                        <h3 className='text-[9px] font-normal'>Favorites</h3>
                        <CiHeart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;