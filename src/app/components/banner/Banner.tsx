import { getDiscoverMovies } from "@/lib/getMovies";
import HeroCarousel from "./HeroCarousel";

interface Props {
    id?: string;
    keywords?: string;
}

const Banner = async ({ id, keywords }: Props) => {

    const movies = await getDiscoverMovies(id, keywords)
    return (
        <div className='flex w-full'>
            <HeroCarousel movies={movies}/>
        </div>
    );
};

export default Banner;