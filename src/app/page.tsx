"use client";

import { Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const CenterText = () => {
  return (
    <Row id="centerText" className="align-items-center justify-content-center">
      <Col xs={8} className="text-center style2">
        <h2>Now accepting reservations for St Patrick's Day</h2>
        <h2>Please call 808-531-0422 for reservations</h2>
        <h2>St Patrick's Day To-Go Orders can be ordered on our website menu.</h2>
      </Col>
    </Row>
  );
};

export default function Home() {
  return (
    <main>
      <CenterText />
    </main>
  );
}