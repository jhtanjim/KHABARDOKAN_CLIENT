import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
    return (

        <Container className='my-5'>
            <h1 className='text-center my-5'>About Us</h1>
            <Row>
                <Col xs={12} md={6}>
                    <Image className='rounded-2 border-1'
                        src="https://cdn.pixabay.com/photo/2017/02/25/15/21/pork-barbecue-2098004_960_720.jpg"
                        alt="Example"
                        fluid
                    />
                </Col>
                <Col xs={12} md={6} className='my-auto'>
                    <h2>About KhabarDokan</h2>
                    <p>
                        KhabarDokan is your go-to destination for all things food! We're dedicated to bringing you the freshest and most delicious recipes, food news, and dining tips. Our expert team of chefs and food enthusiasts are always cooking up something new and exciting, so you'll never be bored with our selection. Whether you're a seasoned home cook or a curious foodie looking for inspiration, KhabarDokan has got you covered. Come join us on a culinary adventure and discover the amazing world of food!
                    </p>
                    <Button variant="danger" >
                        Visit Us
                    </Button>
                </Col>
            </Row>
        </Container>

    );
};

export default About;