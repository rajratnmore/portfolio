import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdOutlineWifiCalling3 } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"
import { ImLinkedin } from "react-icons/im"
import { AiFillGithub } from "react-icons/ai"
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

const resume = "http://localhost:3000/Resume_Rajratn_More.pdf";

const Contact = () => {

    const SERVICE_ID = "service_g7s3rpj";
    const TEMPLATE_ID = "template_qp3bfx2";
    const PUBLIC_KEY = "Vaejjw6EUPWNaKv1o";

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    const updateName = (event) => {
        if (event.target.id === "user_name") {
            setFullName(event.target.value);
        } else if (event.target.id === "user_email") {
            setEmail(event.target.value);
        } else {
            setMessage(event.target.value);
        }
    }

    const sendEmail = (event) => {

        event.preventDefault();

        toast.promise(
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY), {
            pending: {
                render() {
                    return "Email is being sent";
                }
            },
            success: {
                render() {
                    return "Email sent successfully";
                }
            },
            error: {
                render() {
                    return "Sorry! Could't send email, something went wrong";
                }
            }
        }
        );

        setFullName("");
        setEmail("");
        setMessage("");
    }

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
            <section id="contact" style={{ background: "#1d3557" }}>
                <Container>
                    <Row>
                        <Col className="contactCol">
                            <h3 className="text-center text-white" style={{ letterSpacing: ".1rem" }}>Contact</h3>
                            <pre className="text-center text-white" style={{ letterSpacing: ".3rem" }}>Get in touch</pre>
                            <hr className="about_hr" />

                            <Row>
                                <Col className="contact_container mt-5">
                                    <Row>
                                        <Col lg={6} className="contact_container_first" style={{ background: "#cfdbd5" }}>
                                            <h3 className="mb-4"> Contact Me</h3>
                                            <pre><HiOutlineMail style={{ color: "#D61355", marginRight: "20px", fontSize: "1rem" }} />  rajmorecsn@gmail.com</pre>
                                            <pre><MdOutlineWifiCalling3 style={{ color: "#D61355", marginRight: "20px", fontSize: "1rem" }} />  9834795343</pre>
                                            <div className="btns mt-5">
                                                <Button className="btn-cv me-5 py-1" onClick={() => { resumeDownload(resume) }}>Download CV</Button>
                                                <a href={"https://www.linkedin.com/in/rajratn-more-67688815a"} target="_blank" rel="noreferrer">
                                                    <ImLinkedin style={{ color: "#D61355", marginRight: "20px", fontSize: "1.5rem" }} />
                                                </a>
                                                <a href={"https://github.com/rajratnmore"} target="_blank" rel="noreferrer">
                                                    <AiFillGithub style={{ color: "#D61355", marginRight: "20px", fontSize: "1.5rem" }} />
                                                </a>
                                            </div>

                                        </Col>

                                        <Col lg={6} className="p-5 contact_container_second" style={{ background: "#cfdbd5" }}>
                                            <Form className="w-75 text-white" ref={form} onSubmit={(event) => { sendEmail(event) }}>
                                                <Form.Group className="mb-3" controlId="user_name">
                                                    <Form.Control
                                                        type="text"
                                                        name="user_name"
                                                        placeholder="Enter Name"
                                                        onChange={(event) => { updateName(event); }}
                                                        value={fullName}
                                                        autoComplete="off"
                                                        required style={{ background: "transparent", border: "1px solid #0d3b66", color: "#000" }} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="user_email">
                                                    <Form.Control
                                                        type="text"
                                                        name="user_email"
                                                        placeholder="Enter Email Address"
                                                        onChange={(event) => { updateName(event); }}
                                                        value={email}
                                                        autoComplete="off"
                                                        required style={{ background: "transparent", border: "1px solid #0d3b66", color: "#000" }} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="message">
                                                    <Form.Control
                                                        as="textarea"
                                                        name="message"
                                                        placeholder="Enter text"
                                                        onChange={(event) => { updateName(event); }}
                                                        value={message}
                                                        autoComplete="off"
                                                        required style={{ background: "transparent", border: "1px solid #0d3b66", color: "#000" }} />
                                                </Form.Group>
                                                <Button type="submit" variant="outline-warning formBtn">Send Message</Button>
                                            </Form>
                                            <ToastContainer
                                                position="top-center"
                                                hideProgressBar={false}
                                                autoClose={5000}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                                theme="light" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}

export default Contact;