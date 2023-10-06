import styles from "../assets/css/NavbarStyle.module.css";
import { Button } from "react-bootstrap";
import navbarlogo from "../assets/img/navbarlogo.png";
import SearchComponent from "./SearchComponent";

const NavbarComponent = () => {
  return (
    <>
      <div className={styles.navbar}>
        <nav>
          <img src={navbarlogo} className={styles.navbarlogo} />
          <ul>
            <li>
              <SearchComponent />
            </li>
          </ul>
          <ul>
            <a href="">
              <Button className={styles.buttons} variant="outline-danger">
                Login
              </Button>
            </a>
            <a href="">
              <Button className={styles.buttons} variant="outline-danger">
                Register
              </Button>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
