import PropType from "prop-types";
import styles from "../assets/css/ImageCarouselStyle.module.css";

const ImageCarousel = ({ imageURL }) => {
  return (
    <div>
      <img src={imageURL} alt="" className={styles.backdropsize} />
    </div>
  );
};

ImageCarousel.propTypes = {
  imageURL: PropType.string,
};

export default ImageCarousel;
