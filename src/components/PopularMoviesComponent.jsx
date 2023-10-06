import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, Container } from "react-bootstrap";
import PopularCarousel from "./PopularCarousel";
import styles from "../assets/css/PopularMoviesStyle.module.css";

const PopularMoviesComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_POPULAR_URL}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        const { data } = response;

        setPopularMovies(data?.results.slice(0, 15));
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

  const cardsPerSlide = 5;
  const totalSlides = Math.ceil(popularMovies.length / cardsPerSlide);

  return (
    <Container fluid>
      <div className={styles.popularmovies}>
        <div>
          <h3 className="text-center">Popular Movies</h3>
        </div>
        <div className={styles.carousel}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {[...Array(totalSlides)].map((_, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <div className={styles.cardwrapper}>
                  <div className={styles.cardContainer}>
                    {popularMovies.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((movie) => (
                      <div key={movie?.id} className={styles.card}>
                        <PopularCarousel id={movie?.id} imageURL={import.meta.env.VITE_API_IMAGE_URL + movie?.poster_path} title={movie?.original_title} />
                      </div>
                    ))}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default PopularMoviesComponent;
