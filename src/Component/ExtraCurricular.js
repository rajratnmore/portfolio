import React from "react";
import { Card } from "react-bootstrap";
import { BsJournalCode } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiCodeCurly } from 'react-icons/bi';
import { GiComputing } from 'react-icons/gi';

const ExtraCurricular = () => {

    return (
        <>

            <div className="extra_curricular">

                <Card className="extra_curricular_item">
                    <Card.Header className="extra_curricular_icon"><BiCodeCurly /></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Solved 300+ DSA Codding Question and Searching, Sorting Algorithms on geekster platform.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "#1d3557", color: "#1d3557" }}>Footer</Card.Footer>
                </Card>

                <Card className="extra_curricular_item">
                    <Card.Header className="extra_curricular_icon"><GiComputing /></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Participated in various codding contents organized by geekster also Participated in college codding competition
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "#1d3557", color: "#1d3557" }}>Footer</Card.Footer>
                </Card>

                <Card className="extra_curricular_item">
                    <Card.Header className="extra_curricular_icon"><AiOutlineFundProjectionScreen /></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Worked on various project in a team during college time and also build project individually
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "#1d3557", color: "#1d3557" }}>Footer</Card.Footer>
                </Card>

                <Card className="extra_curricular_item">
                    <Card.Header className="extra_curricular_icon"><BsJournalCode /></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Technical Stack Learned : <br />
                            <span className="text-muted">HTML, CSS, JavaScript, ReactJs, Redux, Java, Spring Boot, MySql, DSA </span>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "#1d3557", color: "#1d3557" }}>Footer</Card.Footer>
                </Card>
            </div>

        </>
    );
}

export default ExtraCurricular;