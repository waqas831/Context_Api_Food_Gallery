import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { useContext, useState } from "react";
import { MakeContext } from "../context/MakeContext";
const NavBar = () => {
  const { searchtheitems } = useContext(MakeContext);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ fontSize: 25, fontWeight: "bold" }}>
            Food Finder using Context Api
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1"></Nav.Link>
            </Nav>
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" style={{ width: "70%" }}>
              <FormControl
                style={{ width: "100%" }}
                type="search"
                placeholder="Search Based on Catagory e.g Breakfast"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Nav.Link
                href="#action1"
                onClick={() => searchtheitems(search)}
                style={{ fontSize: 25, fontWeight: "bold" }}
              >
                Search
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
