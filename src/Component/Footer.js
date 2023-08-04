import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return(
        <>
            <section id="footer" className="bg-warning">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h6 className="text-muted me-auto text-center my-2">This is my Portfolio</h6>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Footer;