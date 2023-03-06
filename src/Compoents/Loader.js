import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <Spinner animation="border" role="status" variant="primary" style={{ display: "block", margin: "10px auto" }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default Loader
