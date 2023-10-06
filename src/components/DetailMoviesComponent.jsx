import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../assets/css/DetailMoviesStyle.module.css";
import axios from "axios";

const DetailMoviesComponent = () => {
  const [detailMovie, setDetailMovie] = useState({});
  const { movieId } = useParams();
  const [releaseYear, setReleaseYear] = useState("");
  const [genres, setGenres] = useState([]);
  const [voteAveragePercent, setVoteAveragePercent] = useState("");
  const [formattedRuntime, setFormattedRuntime] = useState("");

  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_DETAIL_URL}/${movieId}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        const { data } = response;

        const releaseDate = data.release_date;
        const year = new Date(releaseDate).getFullYear();
        setReleaseYear(year);

        const movieGenres = data.genres.map((genre) => genre.name);
        setGenres(movieGenres);

        const voteAverage = Math.floor(data.vote_average * 10);
        setVoteAveragePercent(`${voteAverage}%`);

        const runtimeMinutes = data.runtime;
        const hours = Math.floor(runtimeMinutes / 60);
        const minutes = runtimeMinutes % 60;
        setFormattedRuntime(`${hours}h ${minutes}m`);

        setDetailMovie(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }

        alert(error?.message);
      }
    };

    getDetailMovie();
  }, [movieId]);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "black",
          backgroundPosition: "center center",
        }}
      >
        <img
          src={`${import.meta.env.VITE_API_IMAGE_URL}/${detailMovie?.backdrop_path}`}
          alt=""
          style={{
            width: "100%",
            filter: "brightness(40%) blur(5px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div>
            <Container fluid>
              <Row className="d-flex vh-100 align-items-center">
                <Col className="d-flex align-items-center justify-content-center">
                  <img className={styles.poster} src={`${import.meta.env.VITE_API_IMAGESM_URL}/${detailMovie?.poster_path}`} alt="" />
                </Col>
                <Col className="">
                  <h1 className={styles.textcontent}>
                    {detailMovie?.original_title} ({releaseYear})
                  </h1>
                  <p className={styles.textcontent}>
                    {voteAveragePercent} | {genres.join(", ")} | {formattedRuntime}
                  </p>

                  <br />
                  <p className={styles.textcontent}>
                    <i>{detailMovie?.tagline}</i>
                  </p>
                  <p className={styles.textcontent}>{detailMovie?.overview}</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMoviesComponent;
