import HomeCarouselComponent from "../components/HomeCarouselComponent";
import PopularMoviesComponent from "../components/PopularMoviesComponent";
import UpcomingMoviesComponent from "../components/UpcomingMoviesComponent";

const HomePage = () => {
  return (
    <div>
      <HomeCarouselComponent />
      <PopularMoviesComponent />
      <UpcomingMoviesComponent />
    </div>
  );
};

export default HomePage;
