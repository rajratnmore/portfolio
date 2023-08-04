import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ProjectsApi from "./ProjectApi";

const Projects = () => {

    return (
        <>
            <section id="project" className="">
                <Container>
                    <Row>
                        <Col className="projectCol">
                            <h3 className="text-center" style={{ letterSpacing: ".1rem" }}>Projects</h3>
                            <pre className="text-center" style={{ letterSpacing: ".3rem" }}>This is my work</pre>
                            <hr className="about_hr" />

                            <Row>
                                <Col className="project_container">

                                    {
                                        ProjectsApi.map((currProject) => {
                                            const { id, title, desciption, technology, projectPic, hostedLink } = currProject;
                                            return <Card style={{ width: '18rem' }} key={id}>
                                                <Card.Img variant="top" src={projectPic} />
                                                <Card.Body style={{ background: "#bee9e8", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }}>
                                                    <Card.Title className="mt-3">{title}</Card.Title>
                                                    <hr className="resume_hr w-50 mx-0" />
                                                    <Card.Text className="pt-4">{desciption}</Card.Text>
                                                    <Card.Text className="pt-4"> <span className="fw-bold text-muted">Technical Stack : </span></Card.Text>
                                                    <pre className="fw-bold">{technology}</pre>
                                                    <a href={hostedLink} rel="noreferrer" target="_blank">
                                                        <Button variant="warning" className="project_btn mt-3 p-1 w-50">See Live</Button>
                                                    </a>
                                                </Card.Body>
                                            </Card>
                                        })
                                    }

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Projects;