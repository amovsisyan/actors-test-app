import React from 'react';
import {Link} from "react-router-dom";
import {Button, Col, Row} from "antd";
import './LoginComponent.css';

export const LoginComponent = () => {
    return (
        <Row justify="center" align='middle'>
            <Col className={'col_wrapper'}>
                <Link to="/spotify_login"><Button type="primary">Login By Spotify</Button></Link>
            </Col>
        </Row>
    );
}
