import { getNowPlaying, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";
import Banner from "./components/banner/Banner";
import RootLayout from "./layout";
import SearchComponent from "./components/search-component/SearchComponent";
import SelectComponent from "./components/select-component/SelectComponent";
import MovieListContainer from "./components/content/MovieListContainer";

export default async function Home() {
  const nowPlayingMovies = await getNowPlaying();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <RootLayout>
      <div className="bodyContainer">
        <div className="banner flex w-full h-[436px] justify-center lg:container lg:mx-auto">
          <Banner></Banner>
        </div>
        <main className="flex flex-row row-start-2 items-center sm:items-start lg:container lg:mx-auto">
        {/* section left search and select genres */}
        <div className="boxLeft h-screen flex flex-col w-[25%] px-[10px] gap-8">
          
          <SearchComponent/>

          <div className="flex flex-col ">
            <div className="title">
              <h3>Genres</h3>
            </div>
            <div className="flex">
              <SelectComponent/>
            </div>
          </div>
        </div>

        {/* Content movies */}
        <div className="boxRight bg-[--cardContianer-backround] flex flex-col w-[75%] px-2">
          content movies list
          <MovieListContainer movies={popularMovies} title="Popular"/>
        </div>
      </main>
      </div>
    </RootLayout>
  );
}
