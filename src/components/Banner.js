import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css/animate.min.css';
import TrackVisibility from "react-on-screen";

const handleScrollToFooter = () => {
  const element = document.getElementById('footer');
  if (element) {
    const navHeight = 75; // Adjust if your navbar height is different
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navHeight,
      behavior: 'smooth'
    });
  }
};

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Aspiring Web Developer",
                        "UI/UX Enthusiast",
                        "Front-End Developer",
                        "Problem Solver",
                        "Student & Learner" 
                    ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }   
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility once={false} partialVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{'Hi I\'m David. '} <span className="wrap">{text}</span></h1>
                            <p>I am driven with a passion for creating dynamic and responsive web applications. I love to learn new technologies and improve my skills. I enjoy solving complex problems and turning ideas into functional, user-friendly digital experiences. My goal is to build impactful projects that not only meet client needs but also provide seamless and engaging interactions for users.</p>
                            <button onClick={handleScrollToFooter}>Let's Connect <ArrowRightCircle size={25}/></button>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
         </section>
    )
}