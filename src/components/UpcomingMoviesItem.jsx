import { Card } from "react-bootstrap";
import PropType from "prop-types";
import styles from "../assets/css/UpcomingMoviesItemStyle.module.css";

const UpcomingMoviesItem = ({ id, imageURL, title }) => {
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

UpcomingMoviesItem.propTypes = {
  id: PropType.number,
  imageURL: PropType.string,
  title: PropType.string,
};

export default UpcomingMoviesItem;
