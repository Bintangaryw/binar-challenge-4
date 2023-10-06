import DetailMoviesComponent from "../components/DetailMoviesComponent";
import DetailMoviesTrailerComponent from "../components/DetailMoviesTrailerComponent";

const DetailMoviePages = () => {
  return (
    <>
      <head>
        <title>Detail</title>
      </head>
      <div>
        <DetailMoviesComponent />
        <DetailMoviesTrailerComponent />
      </div>
    </>
  );
};

export default DetailMoviePages;
