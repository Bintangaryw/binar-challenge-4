import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import UpcomingMoviesItem from "./UpcomingMoviesItem";
import styles from "../assets/css/UpcomingMoviesItemStyle.module.css";

const UpcomingMoviesComponent = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_UPCOMING_URL}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        const { data } = response;

        setUpcomingMovies(data?.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }

        alert(error?.message);
      }
    };

    getPopularMovies();
  }, []);
  return (
    <>
      <div>
        <Container>
          <div>
            <h3 className="text-center">Upcoming</h3>
          </div>
          <div className={styles.content}>
            <Row className="g-4">
              {upcomingMovies.map((movie) => (
                <Col key={movie?.id}>
                  <UpcomingMoviesItem id={movie?.id} imageURL={import.meta.env.VITE_API_IMAGESM_URL + movie?.poster_path} title={movie?.original_title} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UpcomingMoviesComponent;
