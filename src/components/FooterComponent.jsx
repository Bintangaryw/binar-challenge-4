import styles from "../assets/css/FooterComponentStyle.module.css";
import logo from "../assets/img/logo.png";
import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <>
      <div className={styles.body}>
        <Container fluid>
          <Container>
            <Row>
              <Col className="d-flex align-items-center">
                <img src={logo} className={styles.logo} />
              </Col>
              <Col>
                <ul>
                  <li>
                    <b>THE BASICS</b>
                  </li>
                  <li>About Movielist</li>
                  <li>Contact Us</li>
                  <li>Support Forums</li>
                  <li>API</li>
                  <li>System Status</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    <b>GET INVOLVED</b>
                  </li>
                  <li>Contribution Bible</li>
                  <li>Add New Movie</li>
                  <li>Add New TV Show</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    <b>COMMUNITY</b>
                  </li>
                  <li>Guidelines</li>
                  <li>Discussions</li>
                  <li>Twitter</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    <b>LEGAL</b>
                  </li>
                  <li>Terms of Use</li>
                  <li>API Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>DMCA Takedown Request</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default FooterComponent;
