import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import './ContactMe.css'; // External CSS for styling

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }
    if (!formData.message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      // Handle form submission logic here (e.g., send data to an API)
      console.log('Form Data:', formData);
    }
  };

  return (
    <Container fluid className="contact-me-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          {/* Left Column for Contact Information */}
          <Col md={5} className="contact-info">
            <h2 className="contact-heading">Get in Touch</h2>
            <ul className="contact-details">
              <li><AiFillPhone className="contact-icon" /> +91 9306042617</li>
              <li><AiOutlineMail className="contact-icon" /> kajalkumari1235669@gmail.com</li>
              <li>
                <FaLinkedinIn className="contact-icon" />
                <a href="https://www.linkedin.com/in/kajalkumari03/" target="_blank" rel="noopener noreferrer">
                   Kajal Kumari
                </a>
              </li>
              <li>
                <FaGithub className="contact-icon" />
                <a href="https://github.com/kajal-kumari03" target="_blank" rel="noopener noreferrer">
                kajal-kumari03
                </a>
              </li>
            </ul>
          </Col>

          {/* Right Column for Form */}
          <Col md={7}>
            <h1 className="contact-heading">Contact <strong className="purple">Me</strong></h1>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" style={{marginTop:'20px'}}>
                Submit
              </Button>
            </Form>
            {submitted && <div className="form-success">Thank you for reaching out! I'll get back to you soon.</div>}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactMe;
