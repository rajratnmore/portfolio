import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FaUserGraduate } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { SiGnuprivacyguard } from 'react-icons/si';

import Education from "./Education";
import ExtraCurricular from "./ExtraCurricular";
import TechnicalSkills from "./TechnicalSkills";
import PersonalDetails from "./PersonalDetails";

const Resume = () => {

    const [resume, setResume] = useState("education");
    const [prevTag, setPrevTag] = useState();
    const [styleResume, setStyleResume] = useState({
        color: "#fff",
        background: "#1d3557"
    });

    const showDetails = (event) => {

        if (prevTag !== undefined) {
            prevTag.style.color = "#1d3557";
            prevTag.style.background = "#fff";
        }

        const resumeId = event.target.id;
        setResume(resumeId);
        let element = document.getElementById(resumeId);
        element.style.color = "#fff";
        element.style.background = "#1d3557";
        if (element.id === "education") {
            setStyleResume({
                color: "#fff",
                background: "#1d3557"
            });
        } else {
            setStyleResume({
                color: "#1d3557",
                background: "#fff"
            });
        }
        setPrevTag(element);

    }

    return (
        <>
            <section id="resume" style={{ background: "#1d3557" }}>
                <Container>
                    <Row>
                        <Col className="resumeCol" >
                            <h3 className="text-center text-white" style={{ letterSpacing: ".1rem" }}>Resume</h3>
                            <pre className="text-center text-white" style={{ letterSpacing: ".3rem" }}>My Formal Bio Details</pre>
                            <hr className="about_hr" />

                            <Row className="resumeInfoContainer">
                                <Col lg={4} className="p-5 resumeGroupList">
                                    <ListGroup>
                                        <ListGroup.Item id="education" className="resume_GroupItem" onClick={(event) => { showDetails(event) }} style={styleResume}> <FaUserGraduate className="resume_skillIcon" />Education</ListGroup.Item>
                                        <ListGroup.Item id="technicalSkill" className="resume_GroupItem" onClick={(event) => { showDetails(event) }}> <FaLaptopCode className="resume_skillIcon" />Technical Skills</ListGroup.Item>
                                        <ListGroup.Item id="extraCurricular" className="resume_GroupItem" onClick={(event) => { showDetails(event) }}> <AiOutlineBarChart className="resume_skillIcon" />Extra Curricular</ListGroup.Item>
                                        <ListGroup.Item id="personalDetail" className="resume_GroupItem" onClick={(event) => { showDetails(event) }}> <SiGnuprivacyguard className="resume_skillIcon" />Personal Details</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col lg={8} className="pl-5">
                                    <div className="resume-container">
                                        {
                                            (resume === "education") ? <Education /> : (resume === "technicalSkill") ? <TechnicalSkills /> : (resume === "personalDetail") ? <PersonalDetails /> : <ExtraCurricular />
                                        }
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

export default Resume;