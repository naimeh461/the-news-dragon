import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import RightNav from '../Pages/Shared/RightNav';
import Header from '../Pages/Shared/Header';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                <Col lg={9}><Outlet></Outlet></Col>
                <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
    </div>
    );
};

export default NewsLayout;