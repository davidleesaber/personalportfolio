import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/logo4.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/gitbuh.png";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        {/* Top center text */}
        <Row>
        <Col className="text-center">
            <h3 className="footer-heading">Staying in touch</h3>
            <p className="footer-subtext">Thank you for visiting my website</p>
            <p>
            Feel free to reach out &mdash; <a href="mailto:davidl.lee@mail.utoronto.ca" className="footer-contact-link"> davidl.lee@mail.utoronto.ca</a>
            </p>
        </Col>
        </Row>

        {/* Existing footer content */}
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/david-lee-b8341a2ab">
                <img src={navIcon1} alt="LinkedIn"/>
              </a>
              <a href="https://github.com/davidleesaber?tab=repositories">
                <img src={navIcon2} alt="GitHub"/>
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};