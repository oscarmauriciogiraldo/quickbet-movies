import MovieListContainer from "@/app/components/content/MovieListContainer";
import { getDiscoverMovies } from "@/lib/getMovies";

interface Props{
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}

const GenrePage = async ({params: { id }, searchParams: { genre },}: Props) => {
    const movies = await getDiscoverMovies(id);
    return (
        <div className="flex flex-col w-full px-14 pt-5 justify-center lg:container lg:mx-auto bg-[--cardContianer-backround]">
            <h2 className="text-4xl font-bold  mb-5">Results for {genre}</h2>
            <MovieListContainer movies={movies} title={genre} isVerticalOrientation />
        </div>
    );
};

export default GenrePage;