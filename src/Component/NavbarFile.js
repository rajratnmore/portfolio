import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarFile = () => {

  const [prevTag, setPrevTag] = useState(undefined);

  const screenScroll = (scrollSize) => {
    const {aboutSize, resumeSize, projectSize, contactSize} = scrollSize
    const scroll = window.scrollY;
    if (prevTag === undefined) {
      return;
    }
    if (scroll < aboutSize) {
      const currTag = document.getElementById("homeOne");
      prevTag.style.color = "#fff";
      currTag.style.color = "#f48c06";
      setPrevTag(currTag);
    } else if (scroll >= aboutSize && scroll < resumeSize) {
      const currTag = document.getElementById("aboutOne");
      prevTag.style.color = "#fff";
      currTag.style.color = "#f48c06";
      setPrevTag(currTag);
    } else if (scroll >= resumeSize && scroll < projectSize) {
      const currTag = document.getElementById("resumeOne");
      prevTag.style.color = "#fff";
      currTag.style.color = "#f48c06";
      setPrevTag(currTag);
    } else if (scroll >= projectSize && scroll < contactSize) {
      const currTag = document.getElementById("projectOne");
      prevTag.style.color = "#fff";
      currTag.style.color = "#f48c06";
      setPrevTag(currTag);
    } else {
      const currTag = document.getElementById("contactOne");
      prevTag.style.color = "#fff";
      currTag.style.color = "#f48c06";
      setPrevTag(currTag);
    }
  } 

  window.onscroll = () => {
    
    const screenWidth = window.innerWidth;

    if(screenWidth >= 1200){
      const srollSize = {
        aboutSize : 520,
        resumeSize : 1355,
        projectSize : 2270,
        contactSize : 3125
      }
      screenScroll(srollSize);
    }else if(screenWidth >= 992){
      const srollSize = {
        aboutSize : 520,
        resumeSize : 1375,
        projectSize : 2335,
        contactSize : 3775
      }
      screenScroll(srollSize);
    }else if(screenWidth >= 768){
      const srollSize = {
        aboutSize : 610,
        resumeSize : 1880,
        projectSize : 3200,
        contactSize : 4640
      }
      screenScroll(srollSize);
    }else{
      const srollSize = {
        aboutSize : 680,
        resumeSize : 2025,
        projectSize : 3380,
        contactSize : 5955
      }
      screenScroll(srollSize);
    }    

  }

  window.onload = () => {
    window.location.href = "http://localhost:3000/#home";
    const currTag = document.getElementById("homeOne");
    currTag.style.color = "#f48c06";
    setPrevTag(currTag);
  }

  return (
    <>
      <Navbar id="navbar" expand="lg" style={{ background: "#1d3557", position: "sticky", top: "0px" }}>
        <Container>
          <Navbar.Brand className='text-white' style={{ letterSpacing: ".2rem",userSelect: "none" }}>Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggleBtn" aria-haspopup="false" />
          <Navbar.Collapse>
            <Nav className="text-white" style={{ letterSpacing: ".05rem", marginInline: "55%" }}>
              <Nav.Link id="homeOne" className="nav_link" href="#home">Home</Nav.Link>
              <Nav.Link id="aboutOne" className="nav_link" href="#about">About</Nav.Link>
              <Nav.Link id="resumeOne" className="nav_link" href="#resume">Resume</Nav.Link>
              <Nav.Link id="projectOne" className="nav_link" href="#project">Project</Nav.Link>
              <Nav.Link id="contactOne" className="nav_link" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
}

export default NavbarFile;
