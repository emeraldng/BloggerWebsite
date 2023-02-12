import React, { useState } from 'react';

import { PostGrid } from "../components/PostGrid";
import { CustomNavbar } from "../../UI/components/CustomNavbar";

import { BsFillPencilFill } from "react-icons/bs";

import "./Home.scss";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="home_view container">
        <h4 className="mb-0"> <span>[</span> Making your Life Easier  <span>]</span></h4>
        <h1>Discovering the World</h1>
        <CustomNavbar />
        <div className="home_view">
          <PostGrid />
        </div>
      </section>
      {/* <AddPostBtn onClick={handleShow} /> */}

      <Button className="add_new_post" onClick={handleShow}>
      <BsFillPencilFill/>
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
