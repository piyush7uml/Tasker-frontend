import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    {children}
                </Col>
            </Row>

        </Container>
    )
}

export default FormContainer
