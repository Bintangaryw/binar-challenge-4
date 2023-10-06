import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../assets/css/DetailMoviestrailerStyle.module.css";
import axios from "axios";

const DetailMoviesTrailerComponent = () => {
  const { movieId } = useParams();
  const [trailerMovies, setTrailerMovies] = useState([]);

  useEffect(() => {
    const getTrailerMovies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_VIDEO_URL}/${movieId}/videos`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        const { data } = response;

        const limitedTrailers = data.results.slice(0, 8);

        setTrailerMovies(limitedTrailers);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }

        alert(error?.message);
      }
    };

    getTrailerMovies();
  }, [movieId]);

  return (
    <div className={styles.content}>
      <Container>
        <Row>
          {trailerMovies.map((trailer) => (
            <Col key={trailer?.id}>
              <iframe width="280" height="157" src={`https://www.youtube.com/embed/${trailer?.key}`} title={trailer?.name} frameBorder="0" allowFullScreen></iframe>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DetailMoviesTrailerComponent;
