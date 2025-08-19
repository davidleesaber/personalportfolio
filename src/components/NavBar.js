import { useState, useEffect} from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo4.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/gitbuh.png";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }   
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    } , [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    const handleScrollToFooter = () => {
    const element = document.getElementById('footer');
    if (element) {
        const navHeight = 75; // Adjust this if your navbar height differs
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
        });
    }
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/david-lee-b8341a2ab"><img src={navIcon1} alt=""/></a>
                    <a href="https://github.com/davidleesaber?tab=repositories"><img src={navIcon2} alt=""/></a>
                </div>
                <button className='vvd' onClick={handleScrollToFooter}>
                    <span>Let's Connect</span>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}