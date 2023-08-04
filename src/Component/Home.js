import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const resume = "http://localhost:3000/Resume_Rajratn_More.pdf";

const Home = () => {

    const resumeDownload = (URL) => {
        const fileName = URL.split('/').pop();
        const aTag = document.createElement("a");
        aTag.href = URL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <>
            <section id="home">
                <Container>
                    <Row>
                        <Col md={6} lg={8} className="profile-info">
                            <h1>Hello, I'm<span style={{ color: "#f48c06", letterSpacing: ".1rem" }}> Rajratn More</span></h1>
                            <h3>Full Stack Developer</h3>
                            <p className="mt-4 mb-1">Immediate Joiner. Looking for a better opportunity as Java, JavaScript, and React Developer.</p>
                            <p> Passionate towards Java and JavaScript programming and full-stack web development.</p>
                            
                            <div className="btns mt-5">
                                <a href={"https://www.linkedin.com/in/rajratn-more-67688815a"} target="_blank" rel="noreferrer">
                                    <ImLinkedin style={{ color: "#f48c06", marginRight: "20px", fontSize: "1.5rem" }} />
                                </a>
                                <a href={"https://github.com/rajratnmore"} target="_blank" rel="noreferrer">
                                    <AiFillGithub style={{ color: "#f48c06", marginRight: "20px", fontSize: "1.5rem" }} />
                                </a>
                                <Button className="btn-cv py-1" onClick={() => { resumeDownload(resume) }}>Download CV</Button>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="profile-image">
                            <div className="image-container">
                                <img src="images/profilepic.jpg" className="profile_pic" alt="profile pic loading" />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    );
}
export default Home;