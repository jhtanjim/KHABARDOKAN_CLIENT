import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>

                        <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;