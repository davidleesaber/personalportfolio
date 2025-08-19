import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from '../assets/img/py.png';
import java from '../assets/img/java.png';
import re from '../assets/img/react.jpg';
import js from '../assets/img/js.png';
import c from '../assets/img/C.png';
import r from '../assets/img/R.png';
import css from '../assets/img/css.png';
import sql from '../assets/img/sql.png';
import django from '../assets/img/django.jpg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of my technical skills.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={java} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={re} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={js} alt="JavaScript" className="rounded-image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={c} alt="C" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={css} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={r} alt="R" />
                  <h5>R</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="SQL" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={django} alt="Django" />
                  <h5>Django</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};