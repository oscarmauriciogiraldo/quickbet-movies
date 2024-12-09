import MovieListContainer from '@/app/components/content/MovieListContainer';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';

interface Props {
    params: {
        term: string;
    };
}

const page = async ({ params: { term } }: Props) => {
    const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();
    return (
        <div className="flex flex-col w-full px-14 pt-5 justify-center lg:container lg:mx-auto bg-[--cardContianer-backround]">
            <h2 className="text-4xl font-bold  mb-5">Results for {termToUse}</h2>
            <MovieListContainer movies={movies} title="Searched Movies" isVerticalOrientation />
            <MovieListContainer movies={popularMovies} title="You may also like" />
        </div>
    );
};

export default page;