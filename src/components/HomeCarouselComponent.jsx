import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, Button } from "react-bootstrap";
import ImageCarousel from "./ImageCarousel";
import styles from "../assets/css/HomeCarouselStyle.module.css";

const HomeCarouselComponent = () => {
  const [nowplayingMovies, setNowplayingMovies] = useState([]);

  useEffect(() => {
    const getNowplayingMovies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_TOPRATED_URL}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        const { data } = response;

        setNowplayingMovies(data?.results.slice(0, 3));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }

        alert(error?.message);
      }
    };

    getNowplayingMovies();
  }, []);
  return (
    <Carousel controls={false}>
      {nowplayingMovies.map((movie) => (
        <Carousel.Item interval={5000} key={movie?.id}>
          <ImageCarousel imageURL={import.meta.env.VITE_API_IMAGE_URL + movie?.backdrop_path} />
          <Carousel.Caption className={styles["carousel-caption"]}>
            <h1 className={styles.customh1}>{movie?.original_title}</h1>
            <p className={styles.customp}>{movie?.overview}</p>
            <a href="">
              <Button variant="danger" className={styles.button}>
                Watch Trailer
              </Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarouselComponent;
