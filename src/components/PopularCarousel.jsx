import { Card } from "react-bootstrap";
import PropType from "prop-types";
import styles from "../assets/css/PopularMoviesStyle.module.css";

const PopularCarousel = ({ id, imageURL, title }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <a href={`/detail/${id}`} className={styles.link}>
          <Card.Title className="text-center text-truncate">{title}</Card.Title>
        </a>
      </Card.Body>
    </Card>
  );
};

PopularCarousel.propTypes = {
  imageURL: PropType.string,
  title: PropType.string,
  id: PropType.number,
};

export default PopularCarousel;
