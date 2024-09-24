import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    return (
        movies && (
            <div className="bg-black">
                <div className="-mt-52 relative z-20">
                    <MovieList title={"Now Playing"} movies={movies} />
                    <MovieList title={"Trending"} movies={movies} />
                    <MovieList title={"Popular"} movies={movies} />
                    <MovieList title={"Upcoming Movies"} movies={movies} />
                    <MovieList title={"Horror"} movies={movies} />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;
