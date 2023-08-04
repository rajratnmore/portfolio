import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
    return (
        <>
            <section id="about">
                <Container>
                    <Row>
                        <Col className="aboutCol" >
                            <h3 className="text-center" style={{ letterSpacing: ".1rem" }}>About Me</h3>
                            <pre className="text-center" style={{ letterSpacing: ".3rem" }}>Why Choose me ?</pre>
                            <hr className="about_hr" />

                            <Row className="aboutInfoContainer">
                                <Col lg={5} className="p-0">
                                    <img src="images/aboutprofilePic.jpg" className="aboutInfoPic" alt="profile pic loading" />
                                </Col>
                                <Col lg={7} className="pl-5">
                                    <div className="about-container">

                                        <p className="about-container-description">Passionate towards Java and JavaScript programming and full-stack web development.
                                            Highly motivated and hardworking. Eager to learn new technologies and to gain knowledge in areas of my interest.
                                            I have an eye for sleek user-friendly design and I love writing clean code, working with other people on tough problems and
                                            learning new things along the way. For fun, I enjoy traveling, playing Chess.</p>

                                        <p className="about-container-highlights">Here are a few Highlights : </p>
                                        <p className="highlights"> <FiCheckCircle className="me-2" style={{ color: "#f48c06" }} /> Full Stack web development</p>
                                        <p className="highlights"> <FiCheckCircle className="me-2" style={{ color: "#f48c06" }} /> Interactive Front End as per the design</p>
                                        <p className="highlights"> <FiCheckCircle className="me-2" style={{ color: "#f48c06" }} /> React and Vanilla JavaScript, Spring Boot, Java</p>
                                        <p className="highlights"> <FiCheckCircle className="me-2" style={{ color: "#f48c06" }} /> React Hooks and Redux for State Management </p>
                                        <p className="highlights"> <FiCheckCircle className="me-2" style={{ color: "#f48c06" }} /> Building REST API</p>
                                        <p className="highlights"> <FiCheckCircle className="me-2" style={{ color: "#f48c06" }} /> Managing Database</p>

                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
}

export default About;