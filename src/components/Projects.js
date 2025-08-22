import { Tab, Col, Container, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/workout.avif';
import projImg2 from '../assets/img/MLFood.png';
import projImg3 from '../assets/img/f8.png';
import projImg4 from '../assets/img/nba2.png';
import projImg5 from '../assets/img/anime.png';
import projImg6 from '../assets/img/reactjango.png'
import TrackVisibility from "react-on-screen";
import 'animate.css/animate.min.css';


export const Projects = () => {

    const projects = [
        {
            title: "Workout Tracker App",
            description: <>Workout tracking app built with <strong>React</strong> to help users log workouts and track progress. Provides interactive features for recording exercises, visualizing progress through graphs, and supporting goal achievement with a responsive, user-friendly interface.</>,
            imgUrl: projImg1,
            repoUrl:"https://github.com/davidleesaber/Workout",
        },
        {
            title: "Machine Learning Food Classifier",
            description: <>Machine learning app built with <strong>Python's Numpy</strong> and <strong>pandas</strong> libraries to predict food preferences from survey data. Preprocesses complex survey responses and trains models to classify different food types.</>,
            imgUrl: projImg2,
            repoUrl: "https://github.com/davidleesaber/ML-Food-Classification",
        },
        {
            title: "Fridgid",
            description: <>Fridge management app to reduce food waste and improve organization. Tracks fridge contents, sends expiration notifications, manages shared fridge spaces, and visualizes storage capacity. Developed with a user-centered design process and high-fidelity <strong>Figma</strong> prototypes.</>,
            imgUrl: projImg3,
            repoUrl:"https://github.com/davidleesaber/Fridgid",
        },
        {
            title: "Anime Cataloging app",
            description: <> Anime Cataloging app built with <strong>Java</strong> and <strong>Java Swing</strong> following <strong>Clean Architecture</strong> principles. Enables users to log anime titles, track watching progress, and update the status of each show within a maintainable and scalable codebase. </>,
            imgUrl: projImg5,
            repoUrl:"https://github.com/davidleesaber/csc207",
        },
        {
            title: "Linear Regression Analysis",
            description: (
                <>
                NBA Salary Analysis using linear regression in <strong>R</strong> to investigate key factors influencing NBA player salaries. Processes player data, applying advanced statistical modeling to identify how performance metrics like assists, rebounds, and popularity affect earnings.
                </>
            ),
            imgUrl: projImg4,
            repoUrl:"https://github.com/davidleesaber/NBA-Salary-Analysis",
        },
                {
            title: "React Django Full Stack Project",
            description: (
                <>
                A full-stack web application built with <strong>Django</strong>, <strong>React</strong>, and <strong>PostgreSQL</strong>, featuring secure <strong>JWT authentication</strong> and persistent note management. Deployed on <strong>Choreo Cloud</strong>, it provides <strong>user registration</strong>, <strong>login</strong>, and <strong>logout</strong>, with protected <strong>API routes</strong>, 404 handling, and a <strong>responsive UI</strong>.
                </>
            ),
            imgUrl: projImg6,
            repoUrl:"https://github.com/davidleesaber/Django-React-Full-Stack",
        },
     ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility once={false} partialVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Projects and Experience</h2>
                        </div>
                    }
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Education</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                  <div style={{ maxWidth: '700px', margin: '0 auto', color: '#B8B8B8', fontSize: '16px', lineHeight: '1.5' }}>
                                    <div style={{ marginBottom: '30px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '20px' }}>
                                        <span>Wiz Robotics</span>
                                        <span>Mississauga, ON</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontWeight: '500', marginBottom: '10px' }}>
                                        <span>Coding Teacher</span>
                                        <span>June 2025 – Present</span>
                                    </div>
                                    <ul style={{ paddingLeft: '20px' }}>
                                        <li>Taught students Java and Python programming, emphasizing core coding concepts, problem-solving, and real-world applications.</li>
                                        <li>Delivered personalized instruction by adapting teaching methods to each student’s learning pace, strengths, and preferred learning style, resulting in higher engagement and retention.</li>
                                        <li>Utilized project-based learning and collaborative activities to foster critical thinking, teamwork, and technical proficiency in a dynamic classroom environment.</li>
                                    </ul>
                                    </div>

                                    <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '20px' }}>
                                        <span>HomeSense</span>
                                        <span>Mississauga, ON</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontWeight: '500', marginBottom: '10px' }}>
                                        <span>Store Associate</span>
                                        <span>Sept 2021 – Sept 2023</span>
                                    </div>
                                    <ul style={{ paddingLeft: '20px' }}>
                                        <li>Provided excellent customer service in a busy, fast-paced environment.</li>
                                        <li>Communicated effectively with co-workers, senior staff and managers to ensure all assigned tasks were completed correctly.</li>
                                        <li>Actively listened to and resolved customer disputes leading to an increase in customer satisfaction.</li>
                                        <li>Effectively managed customer inquiries in keeping with company policies while also ensuring a satisfactory customer experience.</li>
                                    </ul>
                                    </div>
                                </div>
                                </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div style={{ maxWidth: '700px', margin: '0 auto', color: '#B8B8B8', fontSize: '16px', lineHeight: '1.5' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <div style={{ fontWeight: '700', fontSize: '20px' }}>University of Toronto St. George</div>
                                    <div style={{ fontWeight: '500', fontSize: '16px', textAlign: 'right' }}>Toronto, ON</div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <div style={{ fontStyle: 'italic', fontWeight: '500' }}>B.S. in Computer Science, ASIP Coop Student</div>
                                    <div style={{ fontStyle: 'italic', fontWeight: '500', textAlign: 'right' }}>Sept 2022 – Present</div>
                                    </div>
                                    <div>
                                    <strong>Relevant Coursework:</strong>
                                    <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                        <li>Data Structures & Analysis</li>
                                        <li>Algorithm Design</li>
                                        <li>Methods of Data Analysis and Statistics</li>
                                        <li>Intro. to Machine Learning</li>
                                        <li>Intro. to Databases</li>
                                        <li>Design of Interactive Computational Media</li>
                                        <li>Visual Computing</li>
                                        <li>Operating Systems</li>
                                    </ul>
                                    </div>
                                </div>

                                </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
    </section>
    )
}    