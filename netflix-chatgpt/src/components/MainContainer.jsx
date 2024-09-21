import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return; // Early return

    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function getRandomNumber() {
        let randomIndex = Math.floor(Math.random() * numbersArray.length);
        return numbersArray[randomIndex];
    }

    const mainMovie = movies[getRandomNumber()];

    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;
